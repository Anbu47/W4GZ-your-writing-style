/*
  W4GZ quiz engine
  ================
  This file is the algorithm only. It holds no writers and no questions.
    data/writers.js    the writers, and how each one would answer each question
    data/questions.js  the questions and their answers
    data/settings.js   the numbers that tune the quiz

  How the quiz decides
  --------------------
  1. Every writer starts out equally likely.
  2. Each answer makes the writers who fit that answer more likely and the
     others less likely. No writer is ever removed, so one odd answer cannot
     lock a student out of the right result.
  3. Everyone gets the same opening questions (the ones marked start: true).
  4. After that the engine looks at the questions that are open and asks the
     one it expects to learn the most from for THIS student, so different
     answers lead to different questions.
       - A question for everyone is always open.
       - A branch question opens only once the writers it is about have,
         together, become likely enough (settings.branchOpensAt). It carries a
         "none of these" answer, which is the way back out of a wrong branch.
       - An answer can also name a follow-up question directly (next: "id").
  5. It stops as soon as the top writer is likely enough
     (settings.confidence), or at settings.maxQuestions.

  The same file runs in the browser (window.QuizEngine) and in Node (require).
*/
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.QuizEngine = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var NONE = "__none__";      // key of the automatic "none of these" answer
  var MIN_GAIN = 0.005;       // below this (in bits) a question is not worth asking

  // Used only when data/settings.js leaves a number out.
  var DEFAULTS = {
    minQuestions: 8,          // never stop before this many answers
    maxQuestions: 16,         // always stop here
    confidence: 0.85,         // stop early once the top writer is this likely (0 to 1)
    branchOpensAt: 0.4,       // a branch question opens when its writers reach this share
    noise: 0.4,               // how often a student picks an answer that doesn't fit "their" writer
    noneRate: 0.3,            // how often a student outside a branch picks "none of these"
    noneText: "None of these sounds like me"
  };

  function asList(v) { return v == null ? [] : (Array.isArray(v) ? v : [v]); }
  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
  function label(w) { return (w && (w.name || w.id)) || "A writer"; }

  /* ------------------------------------------------------------------
     1. Read the data and get it ready
     ------------------------------------------------------------------ */
  // options.long = true keeps the questions marked long: true (the long version of the quiz).
  function compile(data, options) {
    data = data || {};
    var useLong = !!(options && options.long), skipped = {};
    var problems = [];
    function problem(level, text) { problems.push({ level: level, text: text }); }

    var settings = {}, k;
    for (k in DEFAULTS) settings[k] = DEFAULTS[k];
    for (k in (data.settings || {})) settings[k] = data.settings[k];
    ["minQuestions", "maxQuestions", "confidence", "branchOpensAt", "noise", "noneRate"].forEach(function (name) {
      if (typeof settings[name] !== "number" || !isFinite(settings[name])) {
        problem("error", 'Setting "' + name + '" must be a number. Using ' + DEFAULTS[name] + " instead.");
        settings[name] = DEFAULTS[name];
      }
    });
    settings.minQuestions = Math.max(1, Math.round(settings.minQuestions));
    settings.maxQuestions = Math.max(settings.minQuestions, Math.round(settings.maxQuestions));
    settings.confidence = clamp(settings.confidence, 0.05, 0.999);
    settings.branchOpensAt = clamp(settings.branchOpensAt, 0, 1);
    settings.noise = clamp(settings.noise, 0.02, 0.6);       // never 0: nobody is ruled out for good
    settings.noneRate = clamp(settings.noneRate, 0.05, 0.95);
    settings.linear = !!settings.linear;

    // Writers
    var writers = [], writerIndex = {};
    (Array.isArray(data.writers) ? data.writers : []).forEach(function (w, i) {
      if (!w || typeof w.id !== "string" || !w.id) { problem("error", "Writer number " + (i + 1) + " has no id."); return; }
      if (writerIndex[w.id] !== undefined) { problem("error", 'Two writers share the id "' + w.id + '". Every id must be different.'); return; }
      writerIndex[w.id] = writers.length;
      writers.push(w);
    });
    var W = writers.length;

    // Questions
    var questions = [], questionIndex = {};
    (Array.isArray(data.questions) ? data.questions : []).forEach(function (q, i) {
      if (!q || typeof q.id !== "string" || !q.id) { problem("error", "Question number " + (i + 1) + " has no id."); return; }
      if (data.settings && data.settings.scoring === "editorial" ? q.number > ((options && options.limit) || (useLong ? 50 : 25)) : q.long && !useLong) { skipped[q.id] = true; return; }                 // short version: leave it out
      if (questionIndex[q.id] !== undefined) { problem("error", 'Two questions share the id "' + q.id + '". Every id must be different.'); return; }
      var answers = [], keyIndex = {};
      asList(q.answers).forEach(function (a, j) {
        if (!a || typeof a.key !== "string" || !a.key) { problem("error", 'Question "' + q.id + '": answer number ' + (j + 1) + " has no key."); return; }
        if (a.key === NONE || keyIndex[a.key] !== undefined) { problem("error", 'Question "' + q.id + '": the answer key "' + a.key + '" is used twice.'); return; }
        keyIndex[a.key] = answers.length;
        answers.push({ key: a.key, text: String(a.text == null ? "" : a.text), none: false, next: asList(a.next) });
      });
      if (answers.length < 2) { problem("error", 'Question "' + q.id + '" needs at least 2 answers. It is being skipped.'); return; }
      var realCount = answers.length;
      var hasNone = !!q.branch && q.none !== false;
      if (hasNone) {
        keyIndex[NONE] = answers.length;
        answers.push({ key: NONE, text: typeof q.none === "string" && q.none ? q.none : settings.noneText, none: true, next: [] });
      }
      questionIndex[q.id] = questions.length;
      questions.push({
        id: q.id, text: String(q.text == null ? "" : q.text),
        start: !!q.start, branch: q.branch ? String(q.branch) : null,
        answers: answers, keyIndex: keyIndex, realCount: realCount, hasNone: hasNone,
        fits: new Array(W),              // per writer: list of answer numbers that fit, or undefined
        members: 0, L: null, logL: null
      });
    });

    // Which answers fit which writer (comes from each writer's "fit")
    writers.forEach(function (w, wi) {
      var fit = w.fit || {};
      Object.keys(fit).forEach(function (qid) {
        var qi = questionIndex[qid];
        if (qi === undefined && skipped[qid]) return;
        if (qi === undefined) { problem("error", label(w) + ': "fit" names a question "' + qid + '" that does not exist.'); return; }
        var q = questions[qi], picks = [];
        asList(fit[qid]).forEach(function (key) {
          var ai = q.keyIndex[key];
          if (ai === undefined || q.answers[ai].none) problem("error", label(w) + ': question "' + qid + '" has no answer with the key "' + key + '".');
          else if (picks.indexOf(ai) < 0) picks.push(ai);
        });
        if (picks.length) { q.fits[wi] = picks; q.members++; }
      });
    });

    // Follow-up links must point at real questions
    questions.forEach(function (q) {
      q.answers.forEach(function (a) {
        a.next = a.next.filter(function (id) {
          if (questionIndex[id] !== undefined && id !== q.id) return true;
          problem("error", 'Question "' + q.id + '", answer "' + a.key + '": next points to "' + id + '", which is not another question.');
          return false;
        });
      });
    });

    questions.forEach(function (q) {
      var t = likelihood(q, W, settings.noise, settings.noneRate);
      q.L = t.L; q.logL = t.logL;
    });

    settings.linearCount = questions.filter(function (q) { return !q.branch; }).length;
    return { settings: settings, writers: writers, writerIndex: writerIndex, questions: questions, questionIndex: questionIndex, W: W, problems: problems };
  }

  /* ------------------------------------------------------------------
     2. How likely is each answer, for a student who writes like each writer?
        Returns a table: row = answer, column = writer.
     ------------------------------------------------------------------ */
  function likelihood(q, W, noise, noneRate) {
    var A = q.answers.length;
    var L = new Float64Array(A * W), logL = new Float64Array(A * W);
    // An answer that fits a writer has weight 1. One that doesn't has the smaller weight `stray`,
    // set so that a writer with a single fitting answer strays from it `noise` of the time.
    // Because stray is below 1, a fitting answer is always the more likely one.
    var stray = Math.min(0.9, noise / ((1 - noise) * (A - 1)));
    for (var w = 0; w < W; w++) {
      var fits = q.fits[w];
      var total = fits ? fits.length + (A - fits.length) * stray : 0;
      for (var a = 0; a < A; a++) {
        var p;
        if (fits) p = (fits.indexOf(a) >= 0 ? 1 : stray) / total;
        else if (q.hasNone) p = q.answers[a].none ? noneRate : (1 - noneRate) / q.realCount;   // not about this writer
        else p = 1 / A;                                                                        // no opinion
        L[a * W + w] = p;
        logL[a * W + w] = Math.log(p);
      }
    }
    return { L: L, logL: logL };
  }

  /* ------------------------------------------------------------------
     3. Replay the answers so far and work out how likely each writer is
     ------------------------------------------------------------------ */
  function replay(model, history) {
    var W = model.W, logp = new Float64Array(W), asked = {}, pending = [], used = [], w;
    asList(history).forEach(function (h) {
      if (!h) return;
      var qi = model.questionIndex[h.q];
      if (qi === undefined || asked[h.q]) return;
      var q = model.questions[qi], ai = q.keyIndex[h.a];
      if (ai === undefined) return;
      asked[h.q] = true;
      for (var i = 0; i < W; i++) logp[i] += q.logL[ai * W + i];
      pending = pending.filter(function (id) { return id !== h.q; });
      q.answers[ai].next.forEach(function (id) { if (!asked[id] && pending.indexOf(id) < 0) pending.push(id); });
      used.push({ q: q, a: ai });
    });
    var max = -Infinity, sum = 0, p = new Float64Array(W), top = 0;
    for (w = 0; w < W; w++) if (logp[w] > max) max = logp[w];
    for (w = 0; w < W; w++) { p[w] = Math.exp(logp[w] - max); sum += p[w]; }
    for (w = 0; w < W; w++) { p[w] /= sum; if (p[w] > p[top]) top = w; }
    return { p: p, top: top, asked: asked, pending: pending, used: used, count: used.length };
  }

  // Share of the probability held by the writers a question is about.
  function branchShare(q, p) {
    var s = 0;
    for (var w = 0; w < p.length; w++) if (q.fits[w]) s += p[w];
    return s;
  }

  // How much the engine expects to learn from asking a question now, in bits.
  function expectedGain(q, p) {
    var W = p.length, A = q.answers.length, before = 0, after = 0, w;
    for (w = 0; w < W; w++) if (p[w] > 0) before -= p[w] * Math.log(p[w]);
    for (var a = 0; a < A; a++) {
      var pa = 0, s = 0, base = a * W;
      for (w = 0; w < W; w++) {
        var joint = p[w] * q.L[base + w];
        if (joint > 0) { pa += joint; s += joint * Math.log(joint); }
      }
      if (pa > 0) after += pa * Math.log(pa) - s;
    }
    return (before - after) / Math.LN2;
  }

  /* ------------------------------------------------------------------
     4. Given the answers so far, what happens next?
        history = [{ q: "question id", a: "answer key" }, ...]
        Returns { done: false, question, number, why }  or  { done: true, result }
        Same history in, same step out, so "Back" is just dropping the last answer.
     ------------------------------------------------------------------ */
  function step(model, history) {
    var st = replay(model, history), s = model.settings, n = st.count, i, q;
    function ask(question, why) {
      return {
        done: false, number: n + 1, why: why,
        question: {
          id: question.id, text: question.text, branch: question.branch,
          answers: question.answers.map(function (a) { return { key: a.key, text: a.text, none: a.none }; })
        }
      };
    }
    function finish(why) { return { done: true, result: makeResult(model, st, why) }; }

    if (!model.W || !model.questions.length) return finish("no-data");

    // Linear mode (settings.linear): everyone gets every question for everyone, in the order
    // they are listed. No branch questions, no early stop.
    if (s.linear) {
      for (i = 0; i < model.questions.length; i++) {
        q = model.questions[i];
        if (!q.branch && !st.asked[q.id]) return ask(q, "linear");
      }
      return finish("all-answered");
    }
    if (n >= s.maxQuestions) return finish("max-questions");

    // a) a follow-up that an earlier answer asked for
    for (i = 0; i < st.pending.length; i++) {
      q = model.questions[model.questionIndex[st.pending[i]]];
      if (q && !st.asked[q.id]) return ask(q, "follow-up");
    }
    // b) the opening round, in the order the questions are listed
    for (i = 0; i < model.questions.length; i++) {
      q = model.questions[i];
      if (q.start && !st.asked[q.id]) return ask(q, "opening");
    }
    // c) sure enough already?
    if (n >= s.minQuestions && st.p[st.top] >= s.confidence) return finish("confident");

    // d) the open question we expect to learn the most from
    var best = null, bestGain = 0, fallback = null, fallbackGain = 0;
    for (i = 0; i < model.questions.length; i++) {
      q = model.questions[i];
      if (st.asked[q.id]) continue;
      var gain = expectedGain(q, st.p);
      if (q.branch && branchShare(q, st.p) < s.branchOpensAt) {
        if (!fallback || gain > fallbackGain + 1e-12) { fallback = q; fallbackGain = gain; }
        continue;                                          // this branch is still closed
      }
      if (!best || gain > bestGain + 1e-12) { best = q; bestGain = gain; }
    }
    // Before minQuestions we keep asking even if there is little left to learn.
    var floor = n < s.minQuestions ? 0 : MIN_GAIN;
    if (best && bestGain >= floor) return ask(best, best.branch ? "branch" : "everyone");
    // Nothing open is useful any more: try the most useful closed branch rather than give up.
    if (fallback && fallbackGain >= floor) return ask(fallback, "branch");
    return finish("no-more-questions");
  }

  function makeResult(model, st, why) {
    if (model.settings.scoring === "editorial") {
      var ranking = model.writers.map(function (writer, wi) {
        var agree = 0, opportunities = 0;
        st.used.forEach(function (u) {
          var fits = u.q.fits[wi];
          if (!fits || !fits.length) return;
          opportunities++;
          if (fits.indexOf(u.a) >= 0) agree++;
        });
        return { id: writer.id, writer: writer, agree: agree, opportunities: opportunities,
                 share: opportunities ? agree / opportunities : 0 };
      }).filter(function (r) { return r.opportunities > 0; });
      ranking.sort(function (a, b) {
        return b.agree * a.opportunities - a.agree * b.opportunities || b.agree - a.agree || a.id.localeCompare(b.id);
      });
      ranking.forEach(function (r) {
        r.tiedWith = ranking.filter(function (other) {
          return other.id !== r.id && other.agree === r.agree && other.agree * r.opportunities === r.agree * other.opportunities;
        }).map(function (other) { return other.writer.name; });
      });
      return { top: ranking[0] || null, runnerUp: ranking[1] || null, ranking: ranking,
               questions: st.count, reason: why, scoring: "editorial",
               answers: st.used.map(function (u) { return { q: u.q.id, a: u.q.answers[u.a].key }; }) };
    }

    var W = model.W, order = [], w;
    for (w = 0; w < W; w++) order.push(w);
    order.sort(function (a, b) { return st.p[b] - st.p[a] || a - b; });
    var ranking = order.map(function (wi) {
      // agree = how many of the student's answers this writer would also give.
      // On a branch question that is not about this writer, "none of these" counts as agreeing.
      var agree = 0;
      st.used.forEach(function (u) {
        var fits = u.q.fits[wi];
        if (fits ? fits.indexOf(u.a) >= 0 : u.q.answers[u.a].none) agree++;
      });
      return { id: model.writers[wi].id, writer: model.writers[wi], share: st.p[wi], agree: agree };
    });
    return {
      top: ranking[0] || null,
      runnerUp: ranking[1] || null,
      ranking: ranking,
      confidence: ranking.length ? ranking[0].share : 0,
      questions: st.count,
      reason: why,                                         // "confident", "max-questions", "no-more-questions"
      answers: st.used.map(function (u) { return { q: u.q.id, a: u.q.answers[u.a].key }; })
    };
  }

  /* ------------------------------------------------------------------
     5. Checking the data (used by check.html and tools/check.js)
     ------------------------------------------------------------------ */
  function validate(data, options) {
    var model = compile(data, options || { long: true }), s = model.settings, errors = [], warnings = [], notes = [];
    model.problems.forEach(function (p) { (p.level === "error" ? errors : warnings).push(p.text); });
    var W = model.W, names = model.writers.map(label);
    function list(indexes) { return indexes.map(function (i) { return names[i]; }).join(", "); }

    var unread = [];
    if (!data || data.settings == null || typeof data.settings !== "object") unread.push("data/settings.js could not be read (QUIZ_SETTINGS is missing).");
    if (!data || !Array.isArray(data.questions)) unread.push("data/questions.js could not be read (QUIZ_QUESTIONS is missing).");
    if (!data || !Array.isArray(data.writers)) unread.push("data/writers.js could not be read (QUIZ_WRITERS is missing).");
    if (W < 2 && !unread.length) errors.push("The quiz needs at least 2 writers.");
    if (data && data.settings && data.settings.minQuestions > data.settings.maxQuestions) errors.push("Settings: minQuestions is bigger than maxQuestions.");

    var openers = model.questions.filter(function (q) { return q.start; });
    var everyone = model.questions.filter(function (q) { return !q.branch; });
    var branches = model.questions.filter(function (q) { return q.branch; });
    if (!openers.length) notes.push("No question is marked start: true, so the quiz has no fixed opening round.");
    if (openers.length > s.maxQuestions) warnings.push("There are more opening questions (" + openers.length + ") than maxQuestions (" + s.maxQuestions + "), so some will never be asked.");
    if (everyone.length < s.minQuestions) warnings.push("Only " + everyone.length + " questions are for everyone, fewer than minQuestions (" + s.minQuestions + "). Some students may run out of questions.");

    // Writer text that the result page shows
    var styles = s.styles || {}, approaches = s.approaches || {};
    model.writers.forEach(function (w) {
      var missing = ["name", "years", "from", "tagline", "style", "trueStory", "about", "startWith", "superpower", "watchOut", "exercise"]
        .filter(function (f) { return typeof w[f] !== "string" || !w[f].trim(); });
      if (!Array.isArray(w.works) || !w.works.length) missing.push("works");
      if (missing.length) warnings.push(label(w) + " is missing: " + missing.join(", ") + ".");
      if (w.focus && !styles[w.focus]) warnings.push(label(w) + ': focus "' + w.focus + '" is not listed under styles in settings.');
      if (!w.focus) warnings.push(label(w) + " has no focus (used for the color of the result).");
      if (w.approach && !approaches[w.approach]) warnings.push(label(w) + ': approach "' + w.approach + '" is not listed under approaches in settings.');
    });

    // Questions
    var perWriter = model.writers.map(function () { return { everyone: 0, branch: 0 }; });
    model.questions.forEach(function (q) {
      var missing = [], inside = [], counts = q.answers.map(function () { return 0; }), w;
      for (w = 0; w < W; w++) {
        if (!q.fits[w]) { missing.push(w); continue; }
        inside.push(w);
        if (q.branch) perWriter[w].branch++; else perWriter[w].everyone++;
        q.fits[w].forEach(function (a) { counts[a]++; });
      }
      if (!q.text.trim()) warnings.push('Question "' + q.id + '" has no text.');
      q.answers.forEach(function (a, i) {
        if (!a.text.trim()) warnings.push('Question "' + q.id + '": answer "' + a.key + '" has no text.');
        if (!a.none && counts[i] === 0) warnings.push('Question "' + q.id + '": no writer fits the answer "' + a.key + '", so choosing it tells the quiz very little.');
      });
      if (q.branch) {
        if (q.start) warnings.push('Question "' + q.id + '" is both a branch question and an opening question. Opening questions should be for everyone.');
        if (q.members === 0) errors.push('Branch question "' + q.id + '" has no writers. Add its id to the "fit" of the writers it is about.');
        else if (q.members === 1) warnings.push('Branch question "' + q.id + '" is about only one writer (' + list(inside) + ").");
        else if (q.members === W && W > 2) notes.push('Branch question "' + q.id + '" covers every writer. It could be a question for everyone (remove branch).');
      } else {
        if (missing.length === W) errors.push('Question "' + q.id + '": no writer has an answer for it yet. Add it to each writer\'s "fit".');
        else if (missing.length && s.scoring !== "editorial") warnings.push('Question "' + q.id + '" is for everyone, but these writers have no answer for it: ' + list(missing) + ".");
        var biggest = Math.max.apply(null, counts);
        if (W >= 6 && biggest > 0.6 * W) notes.push('Question "' + q.id + '": one answer fits ' + biggest + " of " + W + " writers, so it separates them poorly.");
      }
    });
    model.writers.forEach(function (w, i) {
      if (perWriter[i].everyone + perWriter[i].branch === 0) errors.push(label(w) + ' has an empty "fit", so the quiz can never choose them.');
      else if (branches.length && perWriter[i].branch === 0) notes.push(label(w) + " is not in any branch question.");
    });

    // Can every pair of writers be told apart?
    var pairs = [];
    for (var a = 0; a < W; a++) {
      for (var b = a + 1; b < W; b++) {
        var differ = [];
        model.questions.forEach(function (q) {
          var fa = q.fits[a], fb = q.fits[b];
          var same = (!fa && !fb) || (fa && fb && fa.length === fb.length && fa.every(function (x) { return fb.indexOf(x) >= 0; }));
          if (!same) differ.push(q.id);
        });
        pairs.push({ a: names[a], b: names[b], differ: differ.length, on: differ });
        if (differ.length === 0) errors.push(names[a] + " and " + names[b] + " answer every question the same way, so the quiz cannot tell them apart.");
        else if (differ.length < 3) warnings.push(names[a] + " and " + names[b] + " differ on only " + differ.length + " question" + (differ.length === 1 ? "" : "s") + " (" + differ.join(", ") + "). Add a question that separates them.");
      }
    }
    pairs.sort(function (x, y) { return x.differ - y.differ; });

    // If a file could not be read, everything else is a knock-on effect: report only the file.
    if (unread.length) { errors = unread; warnings = []; notes = []; }

    return {
      ok: errors.length === 0, errors: errors, warnings: warnings, notes: notes, model: model, unread: unread.length,
      summary: {
        writers: W, questions: model.questions.length, opening: openers.length,
        forEveryone: everyone.length, branch: branches.length,
        perWriter: model.writers.map(function (w, i) { return { id: w.id, name: names[i], everyone: perWriter[i].everyone, branch: perWriter[i].branch }; }),
        perQuestion: model.questions.map(function (q) { return { id: q.id, kind: q.start ? "opening" : (q.branch ? "branch: " + q.branch : "everyone"), answers: q.realCount, writers: q.members }; }),
        closestPairs: pairs.slice(0, 12)
      }
    };
  }

  /* ------------------------------------------------------------------
     6. Pretend students, for testing the data
     ------------------------------------------------------------------ */
  // A repeatable random-number generator, so a test gives the same numbers every time.
  function makeRandom(seed) {
    var t = (seed >>> 0) || 1;
    return function () {
      t = (t + 0x6D2B79F5) >>> 0;
      var r = Math.imul(t ^ (t >>> 15), 1 | t);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  // How a pretend student really behaves. This can differ from what the quiz assumes.
  function behaviour(model, noise, noneRate) {
    var tables = {};
    model.questions.forEach(function (q) { tables[q.id] = likelihood(q, model.W, clamp(noise, 0, 0.95), clamp(noneRate, 0, 1)).L; });
    return tables;
  }

  // Run the quiz once for a pretend student who answers like writer number `as`
  // (or clicks at random when `as` is -1). `blend` optionally mixes in a second writer.
  function simulateOne(model, tables, as, random, blend) {
    var history = [];
    for (;;) {                                             // ends at maxQuestions at the latest
      var s = step(model, history);
      if (s.done) return s.result;
      var q = model.questions[model.questionIndex[s.question.id]], A = q.answers.length, pick = A - 1, r = random();
      if (as < 0) pick = Math.min(A - 1, Math.floor(r * A));
      else {
        var who = blend && random() < blend.share ? blend.writer : as, acc = 0, table = tables[q.id];
        for (var a = 0; a < A; a++) { acc += table[a * model.W + who]; if (r < acc) { pick = a; break; } }
      }
      history.push({ q: q.id, a: q.answers[pick].key });
    }
  }

  // Run many pretend students. Call work(milliseconds) until done is true, then read stats.
  //   options.random = true      students who click at random (to check that no writer is favoured)
  //   options.noise              how often these students stray from "their" writer's answers
  //   options.noneRate           how often they pick "none of these" on a branch that isn't theirs
  //   options.runsPerWriter      pretend students per writer (or options.runs when random)
  function simulate(model, options) {
    options = options || {};
    var W = model.W, random = makeRandom(options.seed || 1);
    var tables = options.random ? null : behaviour(model, options.noise == null ? 0.35 : options.noise, options.noneRate == null ? model.settings.noneRate : options.noneRate);
    var perWriter = Math.max(1, options.runsPerWriter || 50);
    var total = options.random ? Math.max(1, options.runs || 2000) : W * perWriter, n = 0;
    var stats = {
      runs: 0, right: 0, topTwo: 0, questions: 0, branchQuestions: 0, stoppedEarly: 0, earlyAndWrong: 0, longest: 0,
      writers: model.writers.map(function (w) { return { id: w.id, name: label(w), runs: 0, right: 0, questions: 0, chosen: 0, mistakenFor: {} }; })
    };
    var job = {
      done: total === 0 || W === 0, progress: 0, stats: stats,
      work: function (ms) {
        var until = Date.now() + (ms || 30);
        while (!job.done) {
          var as = options.random ? -1 : Math.floor(n / perWriter);
          var res = simulateOne(model, tables, as, random);
          var top = model.writerIndex[res.top.id];
          stats.runs++; stats.questions += res.questions; stats.writers[top].chosen++;
          if (res.questions > stats.longest) stats.longest = res.questions;
          res.answers.forEach(function (a) { if (model.questions[model.questionIndex[a.q]].branch) stats.branchQuestions++; });
          if (res.reason === "confident") stats.stoppedEarly++;
          if (as >= 0) {
            var me = stats.writers[as], ok = top === as;
            me.runs++; me.questions += res.questions;
            if (ok) { me.right++; stats.right++; }
            else {
              me.mistakenFor[res.top.id] = (me.mistakenFor[res.top.id] || 0) + 1;
              if (res.reason === "confident") stats.earlyAndWrong++;
            }
            if (ok || (res.runnerUp && model.writerIndex[res.runnerUp.id] === as)) stats.topTwo++;
          }
          n++;
          job.progress = n / total;
          if (n >= total) job.done = true;
          else if (ms !== Infinity && Date.now() >= until) break;
        }
        return job;
      }
    };
    return job;
  }

  return {
    NONE: NONE, DEFAULTS: DEFAULTS, simulate: simulate,
    compile: compile, step: step, validate: validate,
    behaviour: behaviour, simulateOne: simulateOne, makeRandom: makeRandom,
    expectedGain: expectedGain, replay: replay
  };
});

