# Quality report

Production date: 30 October 2026.

## Collection

- **75 complete entries** in **12 categories**; each has its own Markdown article and dataset record.
- **7 learning paths**, including the ten-entry beginner sequence.
- **86 distinct reference URLs** recorded in the dataset. Shared scholarly sources are used where relevant; this is not a count of independent corroborations.
- Articles range from approximately 498 to 632 whitespace-delimited words, including metadata and reference sections.

| Category | Entries |
| --- | ---: |
| artificial-intelligence | 3 |
| consciousness | 9 |
| economics | 5 |
| epistemology | 7 |
| ethics | 9 |
| identity | 7 |
| logic | 6 |
| mathematics | 6 |
| physics | 8 |
| science-and-biology | 3 |
| society-and-justice | 6 |
| time-and-causality | 6 |

Type labels: 5 arguments, 5 models, 7 paradoxes, 7 puzzles, 51 thought experiments. Selected puzzles, arguments, paradoxes, and models are deliberately included and labelled; the total is not a claim that every entry is a thought experiment in the narrow sense.

## Checks performed

- Dataset parsed and validated against the supplied JSON Schema using the standard-library evaluator in `scripts/validate.py`. That evaluator supports the schema keywords used here and fails closed on unsupported validation keywords; it is not a general-purpose JSON Schema implementation.
- Validator checked required fields, duplicate IDs/slugs/paths, category and difficulty values, article existence, metadata agreement, all ten nonempty article sections, reference presence and URL syntax, related IDs and their article links, README/dataset consistency, and relative file and heading links throughout Markdown.
- Eighteen mutation/baseline tests checked that the validator accepts the collection and rejects representative missing metadata, duplicate IDs/slugs, invalid categories/difficulties, missing files/references, malformed URLs/JSON, invalid related IDs, README omissions, missing or empty sections, mismatched article metadata, broken file/heading links, and unlisted articles.
- GitHub workflow and three issue forms parsed as YAML and their expected structure was asserted. The workflow’s two Python commands ran locally. No GitHub-hosted workflow was executed because the repository has not been published.
- SVG parsed as XML, rendered with Inkscape, and visually inspected; a title-size adjustment improved spacing. No third-party artwork is bundled.
- Scanned for empty files, unfinished-text markers, and Unicode replacement characters. Reviewed article samples, the learning paths, connections, and navigation for clarity and distinctions. This was an editorial review with AI assistance, not an independent human peer review or a formal spelling certification.
- Final ZIP opened successfully, passed CRC checks, and was compared against the repository file inventory and bytes. The extracted copy passed the validator and all eighteen tests.

## Research limitations and unresolved verification

Source consultation is recorded in [research/philosophy.md](research/philosophy.md), [research/knowledge.md](research/knowledge.md), and [research/science.md](research/science.md). [Build notes](research/build-and-review.md) distinguish local execution from remote workflow validation.

Many original historical books and articles were accessed through scholarly encyclopedia discussions or teaching materials rather than inspected in full. Some references were available only as abstracts, bibliographic records, or indexed evidence; article notes and research logs specify this. In particular, the utility-monster source is abstract/record-level; the original AI-box page was inaccessible; the original 1979 spandrels paper was bibliographically checked with a later author paper used for substance; and scans or indexed historical materials sometimes required scholarly corroboration. Wigner’s 1961/1962 edition dating is preserved as an uncertainty. The completed philosophy audit records stronger direct access obtained for Singer, Nagel, and Leibniz materials.

No automated live-link sweep was run: retrieval establishes only the access levels documented during production, and the validator checks URL syntax rather than current availability. No claim is made that every historical priority or controversial interpretation was independently settled. Unresolved philosophical questions remain unresolved. AI-box roleplay, evolutionary analogies, formal paradoxes, and games are not represented as established empirical demonstrations.

## Requirements and remaining work

The requested repository structure, dedicated articles, categorized README, original SVG banner, seven learning paths, connections guide, JSON/schema, contribution and attribution guidance, license, issue/PR templates, workflow, upload instructions, and downloadable ZIP are included. The collection reaches the lower end of the requested 75–100 range. Footbridge is a trolley variation; original position and veil of ignorance are treated together; Chinese Room and Wigner’s Friend are cross-referenced rather than duplicated.

The user must create/upload the GitHub repository to execute the remote workflow. Independent expert review, exhaustive primary-text corroboration, and a live status check of every external URL remain outside this completed production pass. The owner may add a private community-reporting contact before inviting a large community. No backend, API key, paid service, or GitHub Pages deployment is required.
