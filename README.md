# Which Famous Writer Are You? — W4GZ

A quiz exploring literary affinities with 68 writers. Choose the short 25-question quiz or the complete 100-question quiz. Answer order is randomized; question order and the 864 writer assignments match the editorial source.

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
- `engine.js`: quiz and scoring logic; legacy adaptive functions remain available for older datasets.
- `index.html`: playable quiz; open directly in a browser or serve through GitHub Pages.
- `tools/editorial-test.js`: document fidelity, scoring, ties, and both quiz lengths.

Run `node tools/editorial-test.js` to verify this edition. `check.html` and `tools/check.js` remain diagnostic tools; their simulated accuracy analysis was designed for the older probabilistic dataset and is not evidence of this editorial quiz’s validity.




## Writer portraits

All 68 result profiles include a matching chibi illustration. To add a writer's portrait, save `assets/writers/<id>.webp` and set `"portrait": "assets/writers/<id>.webp"` on that writer; a writer without one simply shows no picture. Transparent WebP portraits live in `assets/writers/` and are linked by the `portrait` field in each writer profile. Each portrait appears as an upper-body circular medallion overlapping the top center of the colored result banner on desktop and mobile. Writing-approach labels are hidden from banners and the writer directory. Ancient and some early historical likenesses are imaginative reconstructions.

Run `node tools/portrait-test.js` to check all 68 portrait files, writer-to-image assignments and profile switching.

## Complete-quiz extras

After the complete (100-question) quiz, the result page also shows: How they worked (`howTheyWorked`), More true stories (`moreStories`, two items, each with a short `label` and `text`), Why you got this writer (the person's own matching answers, rarest first) and Writers like and unlike you (ranks 4–6 and the lowest match). The 25-question result does not show these sections.

## Writing profile (complete quiz only)

`data/traits.js` tags each of the 400 answers with 0–2 of eight two-sided traits (size, where you look, material, drive, tone, language, attitude, time). After the complete quiz, the result page shows eight scales, a one-line summary and a long analysis for each trait (strongest first): what it says about the writer, strength, what to watch out for, a tip and three writers on the same side. Scores compare each answer with the average answer to that question and are calibrated against random answering (`calibration`), so a dot outside the shaded middle means a clear leaning.
