# Which Famous Writer Are You? — W4GZ

A quiz exploring literary affinities with 50 writers. Choose the short 25-question quiz or the complete 100-question quiz. Answer order is randomized; question order and the 624 writer assignments match the editorial source.

## Source

[W4GZ quiz questions — 100](https://docs.google.com/document/d/1T8Mkq5N315C0mx3kXthJ39nv8izXi02PmhJv-kD1o08)

The source text, reference index, historical qualifications, and verification links are preserved in [docs/editorial-source.md](docs/editorial-source.md).

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

