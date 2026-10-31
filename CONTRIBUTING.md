# Contributing

Students, educators, researchers, and curious readers are welcome. You do not need academic credentials to point out an unclear explanation or a broken link.

## Propose an entry

Open a suggestion issue before writing a long article. Give the scenario, the question it tests, its source, and an explanation of what it adds. A thought experiment uses an imagined situation to examine a claim. We also include selected paradoxes, probability puzzles, arguments, and models, explicitly labelled. Ordinary anecdotes, unsupported internet stories, and small variations of existing entries should not become separate articles.

## Research and write

1. Locate an original publication where possible and a reliable academic discussion. Prefer stable university, journal, publisher, or institutional URLs. Wikipedia may help discovery but cannot be the sole source.
2. Check who formulated the scenario, who named or popularized it, and whether an earlier precursor exists. Say “associated with” where priority is uncertain; do not guess dates.
3. Write original prose. Keep quotations rare, brief, and attributed. A citation does not permit copying the source's wording or structure wholesale.
4. Follow all ten article sections and the metadata format in an existing entry. Explain assumptions before drawing conclusions. Present significant replies without suggesting that every view is equally established.
5. Add three to five open reflection questions, at least one meaningful variation, and relevant local links. If there is no well-established variation, say so rather than inventing one.
6. Update `data/experiments.json`, the README category list, and any affected paths or connections. References must explain which claims they support. `date_verified` is the date a contributor actually inspected source content, not a guarantee of future availability.

## Submit a change

Fork the repository, create a branch, edit the files, then run `python3 scripts/validate.py` from the repository root. For validator changes also run `python3 -m unittest discover -s tests`. Open a pull request describing what changed, why, the sources inspected, and the checks you ran. Keep unrelated edits in separate requests. GitHub's web editor is fine for small corrections.

## Report a problem

Use the factual-error or broken-link issue template. Include the local article, the disputed passage or dead URL, and evidence for a correction. Distinguish a factual mistake from disagreement with an argument. Do not silently replace a scholarly reference with an unreliable summary merely because it is easier to access.

There is no service dependency or publishing step. Maintainers review contributions; opening a pull request does not imply acceptance. All original contributions use the license in [LICENSE](LICENSE).
