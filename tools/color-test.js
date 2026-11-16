const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.join(__dirname, '..');
const box = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'data/writers.js'), 'utf8'), box);
const writers = box.QUIZ_WRITERS;
assert.equal(writers.length, 50);
assert.equal(new Set(writers.map(w => w.color.toLowerCase())).size, 50);
const lum = rgb => rgb.map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4)
  .reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
const contrast = (a, b) => (Math.max(lum(a), lum(b)) + .05) / (Math.min(lum(a), lum(b)) + .05);
for (const writer of writers) {
  assert(/^#[0-9a-f]{6}$/i.test(writer.color), writer.name + ' has an invalid color');
  const rgb = writer.color.slice(1).match(/../g).map(v => parseInt(v, 16) / 255);
  assert(contrast(rgb, [1, 1, 1]) >= 7, writer.name + ': header text contrast');
  assert(contrast(rgb, rgb.map(v => .85 + .15 * v)) >= 4.5, writer.name + ': muted header text contrast');
  assert(contrast(rgb.map(v => .2 + .8 * v), [1, 1, 1]) >= 4.5, writer.name + ': chip text contrast');
}
// Exercise the exact resolver used by headers, ranking bars and directory swatches.
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const resolver = html.match(/const colorOf = w => \{[\s\S]*?\n  \};/)[0];
vm.runInContext("const styleOf = w => ({ color: '#123456' });\n" + resolver + '\nglobalThis.resolveColor = colorOf;', box);
for (const writer of writers) assert.equal(box.resolveColor(writer), writer.color);
assert.equal(box.resolveColor({}), '#123456');
assert.equal(box.resolveColor({color:'not-a-color'}), '#1f1a17');
assert(html.includes('color = colorOf(w)'));
assert(html.includes('colorOf(r.writer)'));
assert(html.includes('sw.style.background = colorOf(x)'));
console.log('PASS: 50 stable unique colors, header/chip text contrast, writer color rendering and legacy fallback.');
