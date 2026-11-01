# Source review — batch 13

- **Review date:** 1 November 2026
- **Branch:** `audit/source-review-high-risk`
- **State:** Local-only; no commit or push

## Scope and selection

Prioritized entries where primary-text access, later testimony, or allegorical interpretation creates substantial attribution and chronology risk. This batch reviews 3 expansion-inventory entries: [Plato’s Allegory of the Cave](../experiments/epistemology/allegory-of-the-cave.md), [The Idle Argument](../experiments/time-and-causality/idle-argument.md), [Zeno’s Arrow](../experiments/logic/zenos-arrow.md).

## Main findings

- **[Plato’s Allegory of the Cave](../experiments/epistemology/allegory-of-the-cave.md)** (`partially_source_checked`): The revised article's narrative and interpretive claims are tied to specified passages in Republic VII and relevant scholarly discussions. It distinguishes Plato's dialogue from modern teaching analogies, identifies the Cave as an analogy rather than a myth, clarifies the visible/intelligible mapping, and reports that philosophers are compelled to rule while leaving scholarly explanations of that compulsion open. The approximate c. 375 BCE date is retained as approximate and attributed to the Project Gutenberg catalogue summary, but is not independently confirmed by the consulted scholarly sources; therefore the status remains partially_source_checked. No human expert review is claimed. See the [item evidence record](source-review-batch13-item-allegory-of-the-cave.json).
- **[The Idle Argument](../experiments/time-and-causality/idle-argument.md)** (`source_checked`): The article now presents the doctor example as a reported argument rather than an established truth, distinguishes Aristotle's related passage from the later named Idle Argument, and identifies Cicero's account as later testimony. It attributes the co-fated response to Chrysippus as Cicero does, notes Cicero's eternal-truth version, and does not imply that the Stoic reply settles every generalized formulation. The article clarifies that causal determinism need not make actions causally ineffective, removes the unsupported claim about strong fatalists, and labels contemporary examples as teaching prompts. Relevant passages in the SEP, Cicero, and Aristotle were read; the dataset reference list is proposed to match the revised article exactly. See the [item evidence record](source-review-batch13-item-idle-argument.json).
- **[Zeno’s Arrow](../experiments/logic/zenos-arrow.md)** (`source_checked`): The article now labels the familiar step-by-step Arrow scenario as a reconstruction from Aristotle’s surviving report, gives the Bekker locations for Aristotle’s report and response, and distinguishes that response from a modern at-at account and the calculus definition of instantaneous velocity. It retains the fifth-century BCE period only as an approximate date, supported by scholarly reference sources. The Stadium is identified as a separate argument concerning relative motion. An unsupported statement about contemporary physics and time at very small scales was removed. Four Further Reading references and the verification date are set out in a separate proposed data patch; the dataset itself remains unchanged. See the [item evidence record](source-review-batch13-item-zenos-arrow.json).

## Status and limits

Batch status: **2 `source_checked`**, **1 `partially_source_checked`**, **0 `needs_source_check`**. Across the expansion inventory, this batch brings coverage to **44 of 57**, with **13 remaining**. `Source_checked` is an editorial traceability status—not a finding that a philosophical conclusion is true, settled, exhaustive, or expert-reviewed. Auditors performed a self-check after edits; no named human subject-matter expert reviewed this batch, and no independent human post-edit review is claimed.

Access gaps and unresolved interpretations are recorded in each linked evidence ledger. The Cave entry remains partial because the approximate c. 375 BCE composition date is supported only by an automatically generated catalogue summary and was not confirmed by a consulted scholarly chronology source; other limits remain scoped in the item records.

## Verification

- `python3 scripts/validate.py` passed for all 132 entries. External URLs were checked for syntax only.
- `python3 -m unittest discover -s tests -v` passed: all 18 tests.
- `git diff --check` passed with no whitespace errors.
- All 3 item ledgers and dataset patches parse; each revised article’s Further Reading URLs match the dataset references in order, and each matching `date_verified` is 2026-11-01.
- Inventory reconciliation: 47 unique audit records in the repository, 44/57 expansion entries covered, 13 remaining, and 3 audited records outside the expansion inventory.

## Local state

Work remains on `audit/source-review-high-risk`, based at `0d26e66`, unstaged, uncommitted, and unpushed. No remote branch, merge, release, or deployment was changed.
