# Source review — batch 12

- **Review date:** 1 November 2026
- **Branch:** `audit/source-review-high-risk`
- **State:** Local-only; no commit or push

## Scope and selection

This small risk-ranked batch reviews three of the 19 expansion entries that remained after batch eleven: [Dion and Theon](../experiments/identity/dion-and-theon.md), [The Grelling–Nelson Paradox](../experiments/logic/grelling-nelson-paradox.md), and [McTaggart’s Paradox of Time](../experiments/time-and-causality/mctaggarts-paradox.md). They were selected for elevated source risk: an ancient puzzle known through later testimony and disputed interpretation; a self-referential paradox with a bibliographic discrepancy; and a complex argument whose structure is often oversimplified and whose connection to relativity needs qualification.

## Main findings

**Dion and Theon.** The article now distinguishes the modern SEP right-foot formulation from Philo’s later account, attributes the “Dion survives; Theon perishes” answer to Chrysippus as reported by Philo, and identifies Philo’s objection. The van Inwagen reply is described using the SEP’s distinction between simples constituting part of Dion’s life before the operation and composing Dion afterward. This does not settle the ancient argument’s interpretation.

**Grelling–Nelson.** The entry makes the assumptions behind self-application explicit, treats the resemblance to Russell’s paradox as structural rather than identical, and limits its account of a response to Ramsey’s distinction between meaning relations. The SEP cites 1908, while a catalogue lists a 1907 publication and a 1908 reprint. Both dates are reported; the original volumes were not consulted.

**McTaggart.** The summary distinguishes the A- and B-series, explains the successive-predication contradiction and the tensed reply/regress, and labels the three-premise form as one reconstruction. Its description of relativity treats it as a challenge to some A-theories, not a decisive refutation.

## Status and limits

All three entries are `source_checked` for their declared claim-traceability scopes under the [approved source-review standard](source-review-standard.md). This editorial label is not a claim that an argument is sound, a philosophical view is settled, the literature has been exhaustively reviewed, or a human expert reviewed the work. No human subject-matter expert reviewed this batch.

Sources and passage locations are recorded in the [Dion and Theon evidence record](source-review-batch12-item-dion-and-theon.json), [Grelling–Nelson evidence record](source-review-batch12-item-grelling-nelson-paradox.json), and [McTaggart evidence record](source-review-batch12-item-mctaggarts-paradox.json). Limits include the lost Chrysippean source and Philo’s later testimony; lack of direct access to the Grelling–Nelson printings; and McTaggart’s publisher-gated text, for which relevant pages were checked in a scan reproduction.

Inventory coverage now stands at **41 of 57 expansion entries audited**, with **16 remaining**. There are **44 audit records total**, including three records outside the expansion inventory. See the consolidated [batch-twelve evidence ledger](source-review-batch12-2026-11-01.json) for counts, validation, and structured claim evidence.

## Verification

`python3 scripts/validate.py` passed for all 132 entries; `python3 -m unittest discover -s tests -v` passed all 18 tests; and `git diff --check` reported no whitespace errors. The three article Further Reading URL lists match their dataset references in order, each with a `date_verified` value of 2026-11-01. The 57-entry inventory, 44 audit records, 16 remaining entries, three out-of-inventory records, and 264 distinct dataset reference URLs were reconciled directly.

## Local state

The existing work remains on branch `audit/source-review-high-risk` at base commit `0d26e66`. Batch-twelve files and article/data/report changes are local, unstaged, uncommitted, and unpushed; the remote branch was not altered. The user’s conditional request to push to `main` does not apply because the broader source audit remains incomplete.
