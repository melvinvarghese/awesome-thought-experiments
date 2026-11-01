# Quality report

Production date: 30 October 2026. Expanded: 31 October 2026 (57 new entries; see [research/expansion.md](research/expansion.md)).

## Collection

- **132 complete entries** in **12 categories**; each has its own Markdown article and dataset record. The first 75 were produced on 30 October 2026 and the remaining 57 on 31 October 2026.
- **11 learning paths**, including the ten-entry beginner sequence.
- **144 distinct reference URLs** recorded in the dataset. Shared scholarly sources are used where relevant; this is not a count of independent corroborations.
- Articles range from approximately 498 to 732 whitespace-delimited words, including metadata and reference sections.

| Category | Entries |
| --- | ---: |
| artificial-intelligence | 8 |
| consciousness | 13 |
| economics | 8 |
| epistemology | 17 |
| ethics | 14 |
| identity | 11 |
| logic | 13 |
| mathematics | 9 |
| physics | 14 |
| science-and-biology | 5 |
| society-and-justice | 9 |
| time-and-causality | 11 |

Type labels: 3 analogies, 19 arguments, 7 models, 19 paradoxes, 15 puzzles, 69 thought experiments. Selected puzzles, arguments, paradoxes, and models are deliberately included and labelled; the total is not a claim that every entry is a thought experiment in the narrow sense.

Difficulty: 35 Beginner, 67 Intermediate, 30 Advanced. The science-and-biology and artificial-intelligence categories remain the smallest and are the most useful places for further contributions.

## Checks performed

- Dataset parsed and validated against the supplied JSON Schema using the standard-library evaluator in `scripts/validate.py`. That evaluator supports the schema keywords used here and fails closed on unsupported validation keywords; it is not a general-purpose JSON Schema implementation.
- Validator checked required fields, duplicate IDs/slugs/paths, category and difficulty values, article existence, metadata agreement, all ten nonempty article sections, reference presence and URL syntax, related IDs and their article links, README/dataset consistency, and relative file and heading links throughout Markdown.
- Eighteen mutation/baseline tests checked that the validator accepts the collection and rejects representative missing metadata, duplicate IDs/slugs, invalid categories/difficulties, missing files/references, malformed URLs/JSON, invalid related IDs, README omissions, missing or empty sections, mismatched article metadata, broken file/heading links, and unlisted articles.
- GitHub workflow and three issue forms parsed as YAML and their expected structure was asserted. The workflow’s two Python commands ran locally. No GitHub-hosted workflow was executed during production; check the repository’s Actions tab for current results.
- On 31 October 2026 the validator and its tests were changed to read and write files as UTF-8. Before that change they failed on Windows, where Python’s default encoding cannot decode the typographic characters used in the articles. After the 57 new entries were added, the validator passed on 132 entries and all eighteen tests passed.
- For the expansion, every new reference was requested by script and its HTTP status, page title and topic-keyword counts were recorded in [research/expansion.md](research/expansion.md). This confirms that the pages exist and discuss the topic; it is not a reading of them.
- SVG parsed as XML, rendered with Inkscape, and visually inspected; a title-size adjustment improved spacing. No third-party artwork is bundled.
- Scanned for empty files, unfinished-text markers, and Unicode replacement characters. Reviewed article samples, the learning paths, connections, and navigation for clarity and distinctions. This was an editorial review with AI assistance, not an independent human peer review or a formal spelling certification.
- Final ZIP opened successfully, passed CRC checks, and was compared against the repository file inventory and bytes. The extracted copy passed the validator and all eighteen tests.

## Research limitations and unresolved verification

Source consultation is recorded in [research/philosophy.md](research/philosophy.md), [research/knowledge.md](research/knowledge.md), [research/science.md](research/science.md), and, for the 31 October 2026 expansion, [research/expansion.md](research/expansion.md). At the time of that expansion, all 57 new entries were checked only for topic coverage, not for whether each cited passage supported the article’s claims. Twenty-six entries have since received claim-level source audits: three high-risk entries in the [first-batch report](research/source-review-batch1-2026-11-01.md), five normal-risk entries in the [second-batch report](research/source-review-batch2-2026-11-01.md), five ethics entries in the [third-batch report](research/source-review-batch3-2026-11-01.md), five AI/science entries in the [fourth-batch report](research/source-review-batch4-2026-11-01.md), five risk-ranked entries in the [fifth-batch report](research/source-review-batch5-2026-11-01.md), and three risk-ranked entries in the [sixth-batch report](research/source-review-batch6-2026-11-01.md). Their [first-batch evidence ledger](research/source-review-batch1-2026-11-01.json), [second-batch ledger](research/source-review-batch2-2026-11-01.json), [third-batch ledger](research/source-review-batch3-2026-11-01.json), [fourth-batch ledger](research/source-review-batch4-2026-11-01.json), [fifth-batch ledger](research/source-review-batch5-2026-11-01.json), and [sixth-batch ledger](research/source-review-batch6-2026-11-01.json) record claims, passages, access limits, and status rationales. All twenty-six entries are marked `source_checked` for their recorded scopes after edits and independent rechecks. These labels do not mean that a philosophical conclusion is true or settled, that every primary work or proof was read in full, that the literature was exhaustively reviewed, or that an entry received human expert review. The other 31 expansion entries remain outside these audits. The original expansion record is retained as a historical account of the checks performed at the time. [Build notes](research/build-and-review.md) distinguish local execution from remote workflow validation.

Many original historical books and articles were accessed through scholarly encyclopedia discussions or teaching materials rather than inspected in full. Some references were available only as abstracts, bibliographic records, or indexed evidence; article notes and research logs specify this. In particular, the utility-monster source is abstract/record-level; the original AI-box page was inaccessible; the original 1979 spandrels paper was bibliographically checked with a later author paper used for substance; and scans or indexed historical materials sometimes required scholarly corroboration. Wigner’s 1961/1962 edition dating is preserved as an uncertainty. The completed philosophy audit records stronger direct access obtained for Singer, Nagel, and Leibniz materials.

No automated live-link sweep was run: retrieval establishes only the access levels documented during production, and the validator checks URL syntax rather than current availability. No claim is made that every historical priority or controversial interpretation was independently settled. Unresolved philosophical questions remain unresolved. AI-box roleplay, evolutionary analogies, formal paradoxes, and games are not represented as established empirical demonstrations.

No automated live-link sweep was run: retrieval establishes only the access levels documented during production, and the validator checks URL syntax rather than current availability. No claim is made that every historical priority or controversial interpretation was independently settled. Unresolved philosophical questions remain unresolved. AI-box roleplay, evolutionary analogies, formal paradoxes, and games are not represented as established empirical demonstrations.

## Requirements and remaining work

The requested repository structure, dedicated articles, categorized README, original SVG banner, seven learning paths, connections guide, JSON/schema, contribution and attribution guidance, license, issue/PR templates, workflow, upload instructions, and downloadable ZIP are included. The original release reached the lower end of the requested 75–100 range; the expansion takes the collection to 132 entries. Footbridge is a trolley variation; original position and veil of ignorance are treated together; Chinese Room and Wigner’s Friend are cross-referenced rather than duplicated.

The user must create/upload the GitHub repository to execute the remote workflow. Independent expert review, exhaustive primary-text corroboration, and a live status check of every external URL remain outside this completed production pass. The owner may add a private community-reporting contact before inviting a large community. No backend, API key, paid service, or GitHub Pages deployment is required.
