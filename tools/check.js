#!/usr/bin/env node
/*
  The same check as check.html, for people who use a terminal:

      node tools/check.js

  It reads the three data files, lists problems, then runs pretend students
  through the quiz to measure accuracy, quiz length and fairness.
*/
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const Engine = require(path.join(root, "engine.js"));

const box = vm.createContext({});
let broken = false;
for (const file of ["data/settings.js", "data/questions.js", "data/writers.js"]) {
  try { vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), box, { filename: file }); }
  catch (e) { broken = true; console.log("✗ " + file + " has a typo and could not be read:\n  " + String(e.stack).split("\n").slice(0, 5).join("\n  ")); }
}

const report = Engine.validate({ settings: box.QUIZ_SETTINGS, questions: box.QUIZ_QUESTIONS, writers: box.QUIZ_WRITERS });
const s = report.summary, model = report.model, set = model.settings;
console.log(`\n${s.writers} writers · ${s.questions} questions (${s.opening} opening, ${s.forEveryone - s.opening} more for everyone, ${s.branch} branch)`);
console.log(set.linear ? `Linear mode: the long version asks ${set.linearCount} questions in order; the short version leaves out the ones marked long. Branch questions are not used.\n` : `Students answer ${set.minQuestions} to ${set.maxQuestions} questions; the quiz stops early at ${Math.round(set.confidence * 100)}% sure.\n`);
report.errors.forEach(t => console.log("✗ ERROR    " + t));
report.warnings.forEach(t => console.log("! warning  " + t));
report.notes.forEach(t => console.log("· note     " + t));
if (!report.errors.length && !report.warnings.length) console.log("✓ No problems found in the data.");

if (report.errors.length || broken || s.writers < 2) { console.log("\nFix the errors above, then run this again."); process.exit(1); }

const pct = x => (100 * x).toFixed(0).padStart(3) + "%";
const runs = Math.max(6, Math.min(150, Math.round(1800 / s.writers)));
const data = { settings: box.QUIZ_SETTINGS, questions: box.QUIZ_QUESTIONS, writers: box.QUIZ_WRITERS };
const kinds = [
  ["Careful  (strays from their writer 20%)", { noise: 0.2 }],
  ["Typical  (strays 35%)", { noise: 0.35 }],
  ["Mixed    (strays 50%)", { noise: 0.5 }]
];
let typical = null;
[["SHORT version", false], ["LONG version", true]].forEach(([title, long]) => {
  const m = Engine.compile(data, { long });
  console.log(`\n${title}: pretend students (${runs} per writer)`);
  console.log("  kind of student                          right writer   in top two   questions");
  kinds.forEach(([name, opts], i) => {
    const st = Engine.simulate(m, Object.assign({ runsPerWriter: runs, seed: 11 + i }, opts)).work(Infinity).stats;
    if (i === 1 && long) typical = st;
    console.log("  " + name.padEnd(40) + pct(st.right / st.runs).padStart(9) + pct(st.topTwo / st.runs).padStart(14) + (st.questions / st.runs).toFixed(1).padStart(12));
  });
});

console.log("\nTypical students in the long version, writer by writer:");
typical.writers.forEach(w => {
  const worst = Object.entries(w.mistakenFor).sort((a, b) => b[1] - a[1])[0];
  console.log("  " + w.name.padEnd(26) + pct(w.right / w.runs) + "  " + (w.questions / w.runs).toFixed(1).padStart(4) + " questions" +
    (worst ? "   most often mistaken for " + model.writers[model.writerIndex[worst[0]]].name : ""));
});

const rnd = Engine.simulate(model, { random: true, runs: Math.max(3000, 250 * s.writers), seed: 5 }).work(Infinity).stats;
const shares = rnd.writers.map(w => w.chosen / rnd.runs);
console.log(`\nRandom clicking: each writer should come up about ${(100 / s.writers).toFixed(1)}% of the time.`);
console.log(`  lowest ${(100 * Math.min(...shares)).toFixed(1)}% (${rnd.writers[shares.indexOf(Math.min(...shares))].name}), highest ${(100 * Math.max(...shares)).toFixed(1)}% (${rnd.writers[shares.indexOf(Math.max(...shares))].name})`);

console.log("\nHardest pairs to tell apart (number of questions that separate them):");
s.closestPairs.slice(0, 5).forEach(p => console.log("  " + (p.a + " / " + p.b).padEnd(44) + p.differ));
console.log("");
