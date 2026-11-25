# Which Famous Writer Are You? — W4GZ

A quiz exploring literary affinities with 77 writers. Choose the short 25-question quiz or the complete quiz (58 sliders, then 10 questions). Answer order is randomized; question order and the 1,019 writer assignments match the editorial source.

## Source

[W4GZ quiz questions — 100](https://docs.google.com/document/d/1T8Mkq5N315C0mx3kXthJ39nv8izXi02PmhJv-kD1o08)

The source text, reference index, historical qualifications, and verification links are preserved in [docs/editorial-source.md](docs/editorial-source.md).

The current edition incorporates the revised wording of questions 37 and 56 and more general answer choices across all 100 questions. Direct genre and setting giveaways were reduced while preserving the editorial writer assignments. The editorial source in this repository reflects these wording updates.

## Balanced short quiz

Every writer appears in 5 or 6 of questions 1–25 (previously 3–6). 62 assignments were added, each tied to a named work, and listed under *Coverage balancing for questions 1 to 25* in [docs/editorial-source.md](docs/editorial-source.md). No earlier assignment was removed and no answer carries more than five writers. In a simulation where a person shares 80% of their writer's answers, the 25-question quiz now ranks that writer first about 70% of the time (was 59%) and in the top three about 89% (was 81%).

## Scoring

For each administered question, a writer receives at most one match when named under the selected answer. An opportunity is an administered question where that writer appears under any answer. Rank by matches / opportunities, then higher match count. Remaining ties are explicitly reported; alphabetical IDs only determine display order within a tie. Writers with zero opportunities are excluded.

The result shows the three closest entries, each with a proportion and match/opportunity counts, and names any tied writers. These proportions are not personality probabilities. Sparse coverage can produce unstable results; pilot and review opportunity coverage before presenting results as reliable assessments.

## Files

- `data/questions.js`: exact question and answer wording in document order.
- `data/writers.js`: existing writer profiles with the document’s selective answer mappings.
- `data/settings.js`: editorial scoring and result styling.
- `data/profile.js`: the complete quiz: 58 sliders, the 23 dimensions, each writer's position on them, and analysis texts for 4 style traits.
- `data/traits.js`: analysis texts for 8 style traits (and the older answer tags).
- `engine.js`: quiz and scoring logic; legacy adaptive functions remain available for older datasets.
- `index.html`: playable quiz; open directly in a browser or serve through GitHub Pages.
- `tools/editorial-test.js`: document fidelity, scoring, ties, and both quiz lengths.

Run `node tools/editorial-test.js` to verify this edition. `check.html` and `tools/check.js` remain diagnostic tools; their simulated accuracy analysis was designed for the older probabilistic dataset and is not evidence of this editorial quiz’s validity.




## Writer portraits

All 77 result profiles include a matching chibi illustration. To add a writer's portrait, save `assets/writers/<id>.webp` and set `"portrait": "assets/writers/<id>.webp"` on that writer; a writer without one simply shows no picture. Transparent WebP portraits live in `assets/writers/` and are linked by the `portrait` field in each writer profile. Each portrait appears as an upper-body circular medallion overlapping the top center of the colored result banner on desktop and mobile. Writing-approach labels are hidden from banners and the writer directory. Ancient and some early historical likenesses are imaginative reconstructions.

The result card shows each writer on the brand paper using a copy of the portrait with its background removed (`assets/writers/cut/`). After replacing portraits, run `python3 tools/cut-portraits.py` to remake those copies. Run `node tools/portrait-test.js` to check all 77 portrait files, writer-to-image assignments and profile switching.

## Complete-quiz extras

After the complete quiz, the result page also shows: How they worked (`howTheyWorked`), More true stories (`moreStories`, two items, each with a short `label` and `text`), Why you got this writer (the person's own matching answers, rarest first) and Writers like and unlike you (ranks 4–6 and the lowest match). The 25-question result does not show these sections.

## Complete quiz (two parts)

The complete quiz lives in `data/profile.js`.

- **Part 1: 58 sliders.** Testers found many multiple-choice answers did not fit them, so part 1 uses sliders instead of fixed answers. 22 "How much would you enjoy this?" sliders (Not for me … Neutral … I would love it) cover 5 forms, 3 kinds of story and 3 themes. 36 "Which is more like you?" sliders place the person between the two sides of 12 style traits, with Both in the middle, so agreeing with both sides never cancels out. Every trait is asked 2–3 times in different words, spread through the quiz.
- **Matching.** Each writer has a position on the same 23 dimensions (`vectors`). The match compares the direction of the person's answers with each writer, so careful answerers who choose "a little" still get clear results. For forms, kinds and themes, a dislike only counts against writers known for that thing, and liking something a writer never did counts half.
- **Part 2: 10 questions.** The 6 closest writers after part 1 are separated with the 10 questions from `questions.js` whose answers best split them; each answer votes for the writers mapped to it, and "None of these" is always allowed.
- **Writing profile.** The result shows what stands out, a rare mix (two traits common in the list but seldom found together), what you would write, how you write, strengths, watch-outs, next steps, the writer family, how you answered (including an answer check), writers to read, twelve scales and a long analysis per trait. Under 50% the card explains why. The least-like writer comes with the points where you are opposites.

The 12 style traits reuse the analysis texts in `data/traits.js` (8 traits); `data/profile.js` adds texts for the 4 newer traits (shape, voice, mood or plot, endings). The short quiz is unchanged.

