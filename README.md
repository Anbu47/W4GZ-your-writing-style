# Which Famous Writer Are You? — W4GZ Quiz

A personality quiz about writing style from **Writing for Gen Z (W4GZ)**.
Students answer 25 or 50 questions and are matched with one of 50 remarkable writers from history.

*Create narratives worth living.*

## Two versions, both linear

The front page has two buttons:

- **Short quiz, 25 questions:** the opening questions and the questions for everyone.
- **Long quiz, 50 questions:** the same 25 plus the 25 questions marked `long: true` in `data/questions.js`. More answers give a closer match.

In both, every student gets the same questions in the order they are listed, and the answers to each question appear in a random order. Each answer shifts the odds for every writer, and the result is the most likely writer at the end.

The quiz is linear because `linear: true` is set in `data/settings.js`. Branch questions are kept in the file but not asked. Set `linear: false` to switch branching back on; the next section describes that mode.

## How the quiz decides

1. **Everyone starts equal.** At the start, all writers are equally likely.
2. **Opening round.** Every student gets the same 5 opening questions.
3. **Each answer shifts the odds.** Writers who fit the answer become more likely, the others less likely. No writer is ever removed, so one odd answer can't lock a student out of the right result.
4. **The quiz picks the next question.** From the questions that are open, it asks the one that best separates the writers currently in the lead for this student.
   - A question *for everyone* is always open.
   - A *branch question* is about one group of writers (for example, the ones who write big novels). It opens only when that group is in the lead. It always has a "none of these" answer, which moves a student back out of a branch they don't belong to.
5. **It stops when it is sure.** After at least 8 questions, the quiz stops as soon as one writer is 85% likely. Otherwise it stops at 20.

The result is the most likely writer, with the second most likely as "a touch of".

## The files

| File | What it holds | Edit it? |
|---|---|---|
| `data/writers.js` | The writers: their text, and how each one would answer the questions | Yes |
| `data/questions.js` | The questions and answers | Yes |
| `data/settings.js` | The numbers that tune the quiz, and the style colors | Sometimes |
| `check.html` | A page that checks your changes | No, just open it |
| `engine.js` | The algorithm. It contains no writers and no questions | No |
| `index.html` | The quiz page students see | No |
| `tools/check.js` | The same check for a terminal: `node tools/check.js` | No |

## Add a writer

Open `data/writers.js`, copy one whole writer block, and change it:

```js
{
  id: "nguyen-du",                 // short, unique, no spaces
  name: "Nguyễn Du",
  years: "1766–1820",
  from: "Vietnam",
  focus: "heart",                  // heart, spark, world or voice (see data/settings.js)
  approach: "reviser",             // planner, explorer or reviser
  tagline: "...",                  // one line under the name
  style: "...",                    // "Your style"
  trueStory: "...",                // "True story"
  about: "...",                    // "Meet the writer"
  works: ["...", "..."],
  startWith: "...",
  superpower: "...",
  watchOut: "...",
  exercise: "...",
  fit: {
    form: "epic",                  // question id: the key of the answer that fits this writer
    ideas: ["history", "family"],  // two answers fit equally well
    // ...one line for every opening question and every question for everyone
    love: "waiting"                // a branch question, only if this writer belongs to that branch
  }
},
```

`fit` is the important part. Go through the questions in `data/questions.js` and, for each one, write the key of the answer this writer would give. You don't need to change any question to add a writer.

Then open `check.html`.

## Add or change a question

Open `data/questions.js`.

**To reword** a question or an answer, change its `text`. Leave the `id` and the `key`s alone, because the writers refer to them.

**To add a question for everyone**, add a block, then add its id to the `fit` of every writer:

```js
{
  id: "ending",
  text: "How does your story end?",
  answers: [
    { key: "happy", text: "Everyone gets what they deserve" },
    { key: "open",  text: "With a question the reader has to answer" },
    { key: "sad",   text: "With a loss that can't be undone" }
  ]
},
```

Add `start: true` to put it in the opening round.

**To add a branch question**, give it a `branch` name, and add its id only to the writers it is about. Use this for a question that only makes sense for one group, and to separate writers who look alike:

```js
{
  id: "poemshape",
  branch: "Poets",
  none: "I don't write poems",        // the way out; optional
  text: "Which poem shape feels like home?",
  answers: [ ... ]
},
```

**To force a follow-up**, put `next: "question id"` on an answer. That question comes straight after a student picks the answer:

```js
{ key: "short", text: "Short, sharp pieces", next: "onepage" }
```

**To remove a question**, delete its block and delete its id from every writer's `fit`.

## Check your changes

Open `check.html` in a browser after every change (on the website it is the quiz address followed by `check.html`). It shows:

- **Typos and gaps**: an answer key that doesn't exist, a writer with no answer for a question, two writers the quiz can't tell apart.
- **Pretend students**: it invents students who answer like each writer and counts how often the quiz finds the right one, and how many questions it takes.
- **Fairness**: with random clicking, every writer should come up about equally often.
- **Hardest pairs**: the writers separated by the fewest questions. If a pair is under 3, add a branch question that separates them.

## Settings

In `data/settings.js`:

| Setting | Now | What it does |
|---|---|---|
| `minQuestions` | 8 | Every student answers at least this many |
| `maxQuestions` | 20 | And never more than this |
| `confidence` | 0.85 | The quiz stops early once one writer is this likely. Higher means longer quizzes and fewer wrong results |
| `branchOpensAt` | 0.4 | A branch question can appear once its writers, together, are this likely |
| `noise` | 0.4 | How often we expect a student to pick an answer that doesn't fit "their" writer. Higher makes the quiz slower to make up its mind |
| `noneRate` | 0.3 | How often we expect a student outside a branch to pick "none of these" |

## Growing to 100 writers

More writers need more questions, both in the bank and per student. The 100-writer row is an estimate from test runs with made-up writers; `check.html` gives the real numbers for your data.

| Writers | Questions for everyone | `maxQuestions` | A typical student answers |
|---|---|---|---|
| 12 | 17 | 16 | about 9 or 10 |
| 50 (now) | 25 | 20 | about 13 |
| 100 | about 30 | 24 | about 14 |

The bank now has 25 questions for everyone and 17 branch questions. Give each new writer one or two branch questions. They matter most for writers who are alike, because that is where questions for everyone stop helping.

## What the numbers are based on

`noise`, `noneRate` and which answer fits which writer are judgments, not measurements. The accuracy figures on the check page come from pretend students who behave the way those settings assume. To know how well the quiz works for real students, collect real answers (a few hundred or more) and adjust the settings and the `fit` choices to match.

The facts used in the writer texts and in the answers were written from general knowledge and have not been checked against sources.
