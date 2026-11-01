# Source review — batch 15

- **Review date:** 1 November 2026
- **Branch:** `audit/source-review-high-risk`
- **State:** Local-only; no commit or push

## Scope and selection

Selected cases where live disputes over identity, composition, vagueness, or voting assumptions materially affect what the example establishes. This batch reviews 3 expansion-inventory entries: [Lumpl and Goliath: The Statue and the Clay](../experiments/identity/statue-and-clay.md), [The Problem of the Many (Tibbles the Cat)](../experiments/identity/problem-of-the-many.md), [The Condorcet Paradox](../experiments/society-and-justice/condorcet-paradox.md).

## Main findings

- **[Lumpl and Goliath: The Statue and the Clay](../experiments/identity/statue-and-clay.md)** (`source_checked`): The article has been corrected to match Gibbard’s original two-piece statue scenario: joining the halves begins the statue and clay piece together, and smashing the statue ends both. It now distinguishes the actual story from Gibbard’s counterfactual in which squeezing the clay into a ball leaves Lumpl existing while Goliath ceases, and identifies Gibbard’s persistence criteria as part of his proposal rather than settled ordinary usage. The article frames constitution, identity, revisionary/eliminativist, and contingent-identity approaches as competing families, states that the issue remains disputed, and labels person/body and ship/timber comparisons as teaching analogies. Relevant passages from the primary article, two SEP entries, and Wolfgang Schwarz’s scholarly survey were read; bibliographic metadata was separately verified. The revised article’s four Further Reading URLs and their order are reproduced exactly in the proposed data patch. This audit did not edit data/experiments.json; unrelated shared-worktree changes are outside this item review. See the [item evidence record](source-review-batch15-item-statue-and-clay.json).
- **[The Problem of the Many (Tibbles the Cat)](../experiments/identity/problem-of-the-many.md)** (`source_checked`): The revised article separates Unger’s original cloud-based many-or-none dilemma from Geach’s Tibbles argument. It now states that Geach’s example begins with at least 1,000 identifiable hairs, considers distinct feline-tissue masses omitting one hair at a time, and uses relative identity to say that different masses can be the same cat. It no longer describes this as a single generic taxonomy: the solutions and their objections are attributed as contested alternatives, including distinctions between Unger’s radical nihilist conclusion and restricted composition, between supervaluationism and indeterminate reference, and between Geach’s relative identity and Lewis’s almost-identity account. The cat-loses-its-tail example is explicitly separated as a parthood/persistence puzzle. Primary passages by Unger and Geach and relevant SEP sections were read; the article states that complete primary works were not read cover to cover. The local data patch uses the two stable archive URLs in the revised Further Reading order and leaves the read-only dataset unchanged. See the [item evidence record](source-review-batch15-item-problem-of-the-many.json).
- **[The Condorcet Paradox](../experiments/society-and-justice/condorcet-paradox.md)** (`source_checked`): The revised article preserves the illustrative cycle while stating the profile and pairwise-majority assumptions explicitly. It separates the cycle in the pairwise relation from agenda effects in sequential voting, qualifies the discussion of scoring rules and domain restrictions, describes Arrow as a broader related result rather than a theorem derived from this example, and distinguishes conditional model-based likelihood from contested empirical prevalence. The original French essay's relevant discussion of a three-candidate election and majority judgments was accessed in OCR text; the article now identifies its example as a modern teaching presentation rather than a verbatim reconstruction of Condorcet's profile. Modern reference and scholarly sources were read at relevant passages. Dataset references were reconciled to the revised Further Reading list; the dataset itself was not modified. See the [item evidence record](source-review-batch15-item-condorcet-paradox.json).

## Status and limits

Batch status: **3 `source_checked`**, **0 `partially_source_checked`**, **0 `needs_source_check`**. Across the expansion inventory, this batch brings coverage to **50 of 57**, with **7 remaining**. `Source_checked` is an editorial traceability status—not a finding that a philosophical conclusion is true, settled, exhaustive, or expert-reviewed. Auditors performed a self-check after edits; no named human subject-matter expert reviewed this batch, and no independent human post-edit review is claimed.

Access gaps and unresolved interpretations are recorded in each linked evidence ledger; the entries in this batch remain bounded by those stated access and interpretation limits.

## Verification

- `python3 scripts/validate.py` passed for all 132 entries. External URLs were checked for syntax only.
- `python3 -m unittest discover -s tests -v` passed: all 18 tests.
- `git diff --check` passed with no whitespace errors.
- All 3 item ledgers and dataset patches parse; each revised article’s Further Reading URLs match the dataset references in order, and each matching `date_verified` is 2026-11-01.
- Inventory reconciliation: 53 unique audit records in the repository, 50/57 expansion entries covered, 7 remaining, and 3 audited records outside the expansion inventory.

## Local state

Work remains on `audit/source-review-high-risk`, based at `0d26e66`, unstaged, uncommitted, and unpushed. No remote branch, merge, release, or deployment was changed.
