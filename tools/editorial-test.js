const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const base = path.join(__dirname, '..');
const Engine = require(path.join(base, 'engine.js'));
const box = vm.createContext({});
for (const file of ['data/settings.js', 'data/questions.js', 'data/writers.js']) {
  vm.runInContext(fs.readFileSync(path.join(base, file), 'utf8'), box);
}
const data = { settings: box.QUIZ_SETTINGS, questions: box.QUIZ_QUESTIONS, writers: box.QUIZ_WRITERS };
const source = fs.readFileSync(path.join(base, 'docs/editorial-source.md'), 'utf8');
const questions = [];
let q, answer;
for (const line of source.split('\n')) {
  if (line === '## Reference index') break;
  let match = line.match(/^### (\d+)\. (.+)/);
  if (match) { q = { number: +match[1], text: match[2], answers: [] }; questions.push(q); continue; }
  match = line.match(/^([A-D])\. (.+)/);
  if (q && match) { answer = { key: match[1].toLowerCase(), text: match[2] }; q.answers.push(answer); }
  if (q && line.startsWith('Maps to:')) answer.writers = line.slice(8).split(',').map(s => s.trim());
}
assert.equal(data.writers.length, 68);
assert.equal(questions.length, 100);
assert.equal(data.questions.length, 100);
let assignments = 0;
questions.forEach((expected, i) => {
  const actual = data.questions[i];
  assert.equal(actual.text, expected.text);
  assert.equal(actual.answers.length, 4);
  expected.answers.forEach((a, j) => {
    assert.equal(actual.answers[j].text, a.text);
    const mapped = data.writers.filter(w => (w.fit[actual.id] || []).includes(a.key)).map(w => w.name).sort();
    assert.equal(JSON.stringify(mapped), JSON.stringify(a.writers.slice().sort()));
    assignments += mapped.length;
  });
});
assert.equal(assignments, 802);
// Every writer appears at least 3 times in the short quiz, so no result rests on one or two answers.
for (const w of data.writers) {
  const short = Object.keys(w.fit).filter(id => data.questions.find(q => q.id === id).number <= 25).length;
  assert(short >= 3, w.name + ' appears only ' + short + ' times in questions 1-25');
}
for (const limit of [25, 100]) {
  const model = Engine.compile(data, { limit });
  assert.equal(model.questions.length, limit);
  assert.equal(model.problems.length, 0);
  const history = [];
  let state;
  for (let i = 0; i <= limit; i++) {
    state = Engine.step(model, history);
    if (state.done) break;
    history.push({ q: state.question.id, a: state.question.answers[i % 4].key });
  }
  assert(state.done);
  assert.equal(state.result.questions, limit);
  for (const row of state.result.ranking) {
    let matches = 0, opportunities = 0;
    for (const h of history) {
      const fits = row.writer.fit[h.q] || [];
      if (fits.length) opportunities++;
      if (fits.includes(h.a)) matches++;
    }
    assert.equal(row.agree, matches);
    assert.equal(row.opportunities, opportunities);
    assert.equal(row.share, matches / opportunities);
  }
}
// Different opportunities, duplicate matching answers, and a zero-opportunity writer.
const fixture = {
  settings: { scoring: 'editorial', linear: true },
  writers: [
    { id: 'a', name: 'A', fit: { q1: ['a','b'], q2: ['b'] } },
    { id: 'b', name: 'B', fit: { q1: ['a'] } },
    { id: 'c', name: 'C', fit: { q1: ['a'], q2: ['a'] } },
    { id: 'd', name: 'D', fit: {} }
  ],
  questions: [1,2].map(n => ({ id: 'q'+n, number: n, text: 'Question', answers: [{ key: 'a', text: 'A' }, { key: 'b', text: 'B' }] }))
};
const result = Engine.step(Engine.compile(fixture, { limit: 2 }), [{ q: 'q1', a: 'a' }, { q: 'q1', a: 'b' }, { q: 'q2', a: 'a' }]).result;
assert.equal(result.top.id, 'c'); // equal proportion, higher match count wins
assert.equal(result.ranking.find(r => r.id === 'a').agree, 1);
assert(!result.ranking.some(r => r.id === 'd'));
fixture.writers[1].fit.q2 = ['a'];
const tied = Engine.step(Engine.compile(fixture, { limit: 2 }), [{ q: 'q1', a: 'a' }, { q: 'q2', a: 'a' }]).result;
assert(tied.top.tiedWith.length === 1);
console.log('PASS: 100 questions, 400 answers, 802 assignments, 68 writers; 25/100 lengths, scoring, ties, and zero opportunities.');

