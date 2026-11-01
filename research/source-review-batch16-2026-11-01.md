# Source review — batch 16

- **Review date:** 1 November 2026
- **Branch:** `audit/source-review-high-risk`
- **State:** Local-only; no commit or push

## Scope and selection

Selected classic epistemological paradoxes and counterexamples whose force depends on background assumptions and on how far a proposed response generalizes. This batch reviews 3 expansion-inventory entries: [Hempel’s Paradox of the Ravens](../experiments/epistemology/ravens-paradox.md), [The Lottery Paradox](../experiments/epistemology/lottery-paradox.md), [Norman the Clairvoyant](../experiments/epistemology/norman-the-clairvoyant.md).

## Main findings

- **[Hempel’s Paradox of the Ravens](../experiments/epistemology/ravens-paradox.md)** (`source_checked`): The article now explains the paradox as a result within Hempel’s qualitative account, deriving the white-shoe result from the instance principle and equivalence condition rather than presenting a questionable three-principle summary. It distinguishes Hempel’s qualitative result from Bayesian comparisons of degree, specifies that Bayesian results depend on probability and background assumptions, and reports Vranas’s criticism as a challenge to one standard solution. Good’s artificial counterexample is attributed through Sprenger rather than presented as directly consulted primary testimony. The revised Further Reading list distinguishes the primary essay, SEP overview, scholarly manuscript, and a publisher abstract for Vranas. Relevant passages in appropriate primary and scholarly sources were read; whole works and some cited originals were not. See the [item evidence record](source-review-batch16-item-ravens-paradox.json).
- **[The Lottery Paradox](../experiments/epistemology/lottery-paradox.md)** (`source_checked`): The revised article conditions the lottery inference on a threshold below certainty and conjunction closure, and describes the resulting beliefs as jointly inconsistent rather than automatically saying the agent believes a contradiction. It replaces the unsupported threshold-to-certainty and credence-first/knowledge-first taxonomy with qualified, non-exhaustive response families, and treats the knowledge question as related rather than settled by the paradox. The preface-paradox attribution is tied to Sorensen's SEP discussion of Makinson and Wilder. Wheeler's review supports the 1961 published-account attribution while noting an earlier conference formulation and 1963 publication. The primary book's argument text was not accessible; relevant passages in two SEP entries and Wheeler's scholarly review were read. The article's four Further Reading URLs match the proposed local patch in order; the dataset itself was not modified. See the [item evidence record](source-review-batch16-item-lottery-paradox.json).
- **[Norman the Clairvoyant](../experiments/epistemology/norman-the-clairvoyant.md)** (`source_checked`): The revised article preserves BonJour's stipulated Norman scenario and his perspective-based objection, but no longer presents the case as automatically decisive against every reliabilist or externalist theory. It distinguishes the challenge to the sufficiency of simple process reliability from different published replies, qualifies the internalism/externalism framing, and identifies Mr. Truetemp and the thermometer comparison as related-but-distinct case and editorial analogy. Relevant passages in BonJour's primary text, two SEP entries, the IEP reliabilism entry, and the SEP knowledge-analysis entry were read. The publisher's record verifies the article's publication details. The proposed data patch's five reference URLs and their order match the revised Further Reading section exactly; the dataset date is updated to 2026-11-01. See the [item evidence record](source-review-batch16-item-norman-the-clairvoyant.json).

## Status and limits

Batch status: **3 `source_checked`**, **0 `partially_source_checked`**, **0 `needs_source_check`**. Across the expansion inventory, this batch brings coverage to **53 of 57**, with **4 remaining**. `Source_checked` is an editorial traceability status—not a finding that a philosophical conclusion is true, settled, exhaustive, or expert-reviewed. Auditors performed a self-check after edits; no named human subject-matter expert reviewed this batch, and no independent human post-edit review is claimed.

Access gaps and unresolved interpretations are recorded in each linked evidence ledger; the entries in this batch remain bounded by those stated access and interpretation limits.

## Verification

- `python3 scripts/validate.py` passed for all 132 entries. External URLs were checked for syntax only.
- `python3 -m unittest discover -s tests -v` passed: all 18 tests.
- `git diff --check` passed with no whitespace errors.
- All 3 item ledgers and dataset patches parse; each revised article’s Further Reading URLs match the dataset references in order, and each matching `date_verified` is 2026-11-01.
- Inventory reconciliation: 56 unique audit records in the repository, 53/57 expansion entries covered, 4 remaining, and 3 audited records outside the expansion inventory.

## Local state

Work remains on `audit/source-review-high-risk`, based at `0d26e66`, unstaged, uncommitted, and unpushed. No remote branch, merge, release, or deployment was changed.
