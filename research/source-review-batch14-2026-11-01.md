# Source review — batch 14

- **Review date:** 1 November 2026
- **Branch:** `audit/source-review-high-risk`
- **State:** Local-only; no commit or push

## Scope and selection

Prioritized arguments frequently retrofitted with later mathematical terminology or compressed into a modern reconstruction; checked the relevant primary or translated passages and scholarly qualifications. This batch reviews 3 expansion-inventory entries: [Zeno’s Dichotomy](../experiments/logic/zenos-dichotomy.md), [Galileo’s Paradox of the Infinite](../experiments/mathematics/galileos-paradox.md), [Moore’s “Here Is One Hand”](../experiments/epistemology/moores-proof-of-an-external-world.md).

## Main findings

- **[Zeno’s Dichotomy](../experiments/logic/zenos-dichotomy.md)** (`source_checked`): The revised entry explicitly labels the familiar stage-by-stage scenario as a teaching reconstruction rather than Zeno’s surviving wording, and identifies Aristotle’s report as later testimony. It distinguishes the modern geometric-series calculation from Aristotle’s ancient treatment of potential infinity and from the separate question of whether supertasks can be completed. Aristotle’s response is described through Huggett’s modern reconstruction with its limitations stated; the lamp and regressive variants are identified as later, related discussions rather than interchangeable versions of Zeno’s text. Further Reading now includes the relevant SEP entries and primary Aristotle passages, and the proposed patch aligns to those links. See the [item evidence record](source-review-batch14-item-zenos-dichotomy.json).
- **[Galileo’s Paradox of the Infinite](../experiments/mathematics/galileos-paradox.md)** (`source_checked`): The revised article grounds the paradox and Galileo’s stated conclusion in the First Day of Two New Sciences, while identifying one-to-one correspondence and cardinality as modern terminology. It distinguishes the Cantorian response from Galileo’s historical formulation, notes that Parker offers a different philosophical interpretation without presenting it as consensus, and describes numerosity theories as later alternatives. Unsupported broad claims about density as a general size measure and finitism were removed. The primary text, the relevant sections of the SEP entry, and relevant passages from Parker’s chapter were consulted. The revised Further Reading links and order are reconciled with the proposed data patch. See the [item evidence record](source-review-batch14-item-galileos-paradox.json).
- **[Moore’s “Here Is One Hand”](../experiments/epistemology/moores-proof-of-an-external-world.md)** (`source_checked`): The article now presents the demonstrative hand-premises and Moore’s three stated proof conditions, while distinguishing his proof of the existence of external objects from a proof that he knows the skeptic’s denial false. It records Moore’s own admission that he did not prove the hand-premises or provide a proof that he was not dreaming. It attributes Baldwin’s interpretation and Raff’s competing reading rather than treating the lecture’s intended force as settled, and frames transmission failure and contextualism as later debates or distinct approaches. The revised Further Reading list and proposed data patch were checked for matching titles, URLs, and order; the proposed verification date is 2026-11-01. See the [item evidence record](source-review-batch14-item-moores-proof-of-an-external-world.json).

## Status and limits

Batch status: **3 `source_checked`**, **0 `partially_source_checked`**, **0 `needs_source_check`**. Across the expansion inventory, this batch brings coverage to **47 of 57**, with **10 remaining**. `Source_checked` is an editorial traceability status—not a finding that a philosophical conclusion is true, settled, exhaustive, or expert-reviewed. Auditors performed a self-check after edits; no named human subject-matter expert reviewed this batch, and no independent human post-edit review is claimed.

Access gaps and unresolved interpretations are recorded in each linked evidence ledger; the entries in this batch remain bounded by those stated access and interpretation limits.

## Verification

- `python3 scripts/validate.py` passed for all 132 entries. External URLs were checked for syntax only.
- `python3 -m unittest discover -s tests -v` passed: all 18 tests.
- `git diff --check` passed with no whitespace errors.
- All 3 item ledgers and dataset patches parse; each revised article’s Further Reading URLs match the dataset references in order, and each matching `date_verified` is 2026-11-01.
- Inventory reconciliation: 50 unique audit records in the repository, 47/57 expansion entries covered, 10 remaining, and 3 audited records outside the expansion inventory.

## Local state

Work remains on `audit/source-review-high-risk`, based at `0d26e66`, unstaged, uncommitted, and unpushed. No remote branch, merge, release, or deployment was changed.
