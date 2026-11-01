# Batch 11: Three Expansion Entries Reviewed

**Outcome:** Three entries from the remaining expansion inventory received claim-level audits and independent read-only post-edit checks. Heraclitus’s River, Galileo’s Ship, and Thomson’s Lamp are `source_checked` for their declared traceability scopes. These labels describe source traceability, not philosophical truth, consensus, or human expert review.

## What changed

- **[Heraclitus’s River](../experiments/identity/heraclitus-river.md):** The entry now distinguishes the B12 wording transmitted through later authors from Plato’s familiar “cannot step twice” report. It names the disagreement between the SEP account, which treats B12 as the likely genuine river fragment and B91 as a paraphrase, and Leonardo Taran, who argues B91 may preserve a separate saying. Modern analogies are marked as teaching comparisons. All six Further Reading URLs match the data record. See the [item evidence record](source-review-batch11-item-heraclitus-river.json).
- **[Galileo’s Ship](../experiments/physics/galileos-ship.md):** The entry separates the cabin passage from Galileo’s tower-stone objection, limits the result to the listed local experiments under uniform motion, and identifies “Galilean relativity” as a retrospective scholarly label. It no longer implies that the passage proves the Earth moves or establishes the full modern laws-of-physics principle. All three Further Reading URLs match the data record. See the [item evidence record](source-review-batch11-item-galileos-ship.json).
- **[Thomson’s Lamp](../experiments/mathematics/thomsons-lamp.md):** The entry now follows Thomson’s initial off-state and toggle schedule, attributes the apparent contradiction to him, and states Benacerraf’s reply narrowly: the switching instructions alone leave the terminal state unspecified; this does not prove physical realizability. The Cesàro-average sentence now points explicitly to SEP §1.2, including its qualification that a mean of one-half does not answer whether the binary lamp is on or off. All three Further Reading URLs match the data record. See the [item evidence record](source-review-batch11-item-thomsons-lamp.json).

All three matching dataset records use `date_verified` 2026-11-01. No public review-status field or badge was added.

## Coverage and limits

The batch prioritized remaining entries with elevated attribution and interpretation risk: disputed ancient fragment wording and transmission; a primary thought experiment often overstated as modern relativity; and a supertask argument where the distinction between finite-stage instructions and a terminal state matters. All three occur in the 57-entry expansion inventory. After this batch, **38 of 57 expansion entries have audit records** and **19 remain without claim-level audit records**. Of the 38 covered expansion entries, 37 are `source_checked` and one—Nietzsche’s Eternal Recurrence—is `partially_source_checked`. Across the repository there are 41 audit records: 40 source-checked, one partial, and three outside the expansion inventory.

Access remains bounded by the consulted sources. Heraclitus’s book is lost; the audit uses later ancient witnesses and represents, rather than resolves, Graham’s and Taran’s disagreement. Galileo’s relevant pages were read in Stillman Drake’s full English translation, but the original Italian was not collated. Thomson’s and Benacerraf’s relevant primary passages were read in hosted copies, not systematically in full; the publisher gates Benacerraf’s full text. No named human subject-matter expert reviewed this batch.

## Verification

- `python3 scripts/validate.py` passed: 132 entries; schema, article sections, metadata, references, README consistency, and local links checked. External URLs were checked for syntax only.
- `python3 -m unittest discover -s tests -v` passed: all 18 tests.
- `git diff --check` passed with no whitespace errors.
- JSON and inventory reconciliation passed: 41 unique audit IDs across 11 consolidated batch ledgers; 38 of 57 expansion IDs covered, 19 remain, and three audited entries are outside the inventory. The 23 individual item ledgers parsed as JSON; repository status counts are 40 `source_checked` and one `partially_source_checked`.
- Further Reading URL lists match the corresponding `data/experiments.json` references exactly and in order: Heraclitus 6/6, Galileo 3/3, Thomson 3/3. All three review dates are 2026-11-01.

## Local state

At the time of batch 11, the review work was in the `source-audit` worktree on branch `audit/source-review-high-risk`, with `HEAD` at `0d26e66`. Batch-11 changes were local, unstaged, and uncommitted; no commit, push, merge, release, or remote-branch change had been made.
