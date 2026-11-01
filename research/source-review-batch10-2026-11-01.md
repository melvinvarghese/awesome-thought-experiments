# Batch 10: Three Expansion Entries Reviewed

**Outcome:** Three entries received claim-level source audits and independent read-only post-edit checks. Quine’s Gavagai and Einstein’s Train are `source_checked` for their declared scopes. Nietzsche’s Eternal Recurrence remains `partially_source_checked` because the cited unpublished notebook fragment was not directly available. These labels record source traceability, not philosophical truth, consensus, or human expert review.

## What changed

- **[Quine’s Gavagai](../experiments/logic/gavagai.md):** The entry now distinguishes the rabbit stimulus and tentative sentence translation from the further issue of term reference, and it separates Gavagai from Quine’s broader translation-manual thesis. The independent check found no substantive claim mismatch, but caught a source-platform error: the DOI resolves to a gated Philosophy Documentation Center page, not JSTOR. The article now identifies that landing page accurately; Quine’s relevant 1970 passage was read in a separate course-hosted scan. All four Further Reading URLs match the dataset record. See the [item evidence record](source-review-batch10-item-gavagai.json).
- **[Einstein’s Train](../experiments/physics/einsteins-train.md):** The entry distinguishes signal arrival from frame-assigned emission times using synchronized clocks, and qualifies the causal-order and interpretation claims. The independent review confirmed the train-frame account against Einstein’s §§VIII–IX and 1905 §§1–2, plus OpenStax’s technical explanation; no substantive discrepancy was found. All six Further Reading URLs match the dataset record. See the [item evidence record](source-review-batch10-item-einsteins-train.json).
- **[Nietzsche’s Eternal Recurrence](../experiments/time-and-causality/eternal-recurrence.md):** The entry now places the existential reading alongside published affirmative and cosmological-sounding formulations and attributes differing emphases to named sources rather than presenting a consensus. The independent check found no substantive discrepancy. The unpublished notebook fragment is still only discussed through secondary scholarship, so the entry remains partial. All six Further Reading URLs match the dataset record. See the [item evidence record](source-review-batch10-item-eternal-recurrence.json).

The three matching dataset records use `date_verified` 2026-11-01. No public review-status field or badge was added.

## Coverage and limits

All three batch-ten entries occur in the 57-entry expansion inventory. Across all ten batches, there are **38 audit records across the repository**: **35 of 57 expansion entries have audit records**, while **22 have no claim-level audit record**. Of those 35 expansion entries, 34 are `source_checked` and one—Eternal Recurrence—is `partially_source_checked`. Three additional records—Utility Monster, the AI Box Scenario, and the Spandrels of San Marco—are outside the expansion inventory. The batch-nine total of 35 therefore counted 32 expansion entries plus three outside the list; it did not represent 35 of 57. Batch ten adds three listed entries, bringing expansion-inventory coverage to 35 of 57.

Access remains bounded by the consulted materials. For Gavagai, the complete *Word and Object* book was not read; relevant passages from Quine’s 1970 paper were read in a third-party course-hosted reprint scan, while the DOI landing page at the Philosophy Documentation Center supplies metadata but gates the full text. For Einstein, the train exposition was read in Robert W. Lawson’s 1920 English translation, and the 1916 German first-edition title page was not checked; the philosophical interpretation survey is selective. For Eternal Recurrence, the published English passages are historical translations or web transcriptions, not critical editions, and the cited Nachlass fragment KSA 11:38[12] / *The Will to Power* §1066 was not directly accessed. No human subject-matter expert reviewed this batch.

## Verification

- `python3 scripts/validate.py` passed for all 132 entries, checking schema, required article sections, metadata, references, README consistency, and local links. External URLs were checked for syntax only.
- `python3 -m unittest discover -s tests` passed: all 18 tests.
- `git diff --check` passed with no whitespace errors.
- A separate reconciliation check confirmed that the three article Further Reading URL lists match their dataset references and dates; all 38 review IDs are unique; expansion coverage is 35 of 57 with 22 absent and three audited IDs outside the list; and all batch-ten evidence files parse. It also confirmed the Gavagai DOI/PDC metadata page is distinct from the scan used for its passage review.

## Local state

`git status` confirmed the work remains local and unstaged on `audit/source-review-high-risk`, with `HEAD` at `0d26e66` and no staged diff. No commit, push, merge, release, or remote-branch change was made.
