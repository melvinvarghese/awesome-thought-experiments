# Batch 8: Three Risk-Ranked Entries Source-Checked

**Outcome:** Three entries received claim-level source audits, targeted article edits, and independent read-only post-edit reviews. All three are `source_checked` for the claim-traceability scopes in their evidence records. This does not establish that an argument is sound, a disputed conclusion is true, or that any entry received human expert review.

## What changed

- **[Pascal’s Wager](../experiments/economics/pascals-wager.md):** The article now distinguishes the wager’s theological payoff setup from established fact, qualifies the infinite-utility inference, separates belief from conduct and inquiry, and presents the many-gods and infinite-utility objections and replies as disputed. The primary text was read in an English translation; the article and dataset now list the same four sources. See the [item evidence record](source-review-batch8-item-pascals-wager.json).
- **[Kripke’s Quus](../experiments/logic/quus-rule-following.md):** The article defines the quus function precisely and distinguishes Kripke’s basic skeptical conclusion from the stronger claim that nobody means anything. It presents Kripke’s reading of Wittgenstein as contested and identifies the primitive-normativity proposal as Hannah Ginsborg’s. An independent review caught a mistaken name in the first revision; the duplicate paragraph was removed, the attribution was checked against the SEP, and the final follow-up passed. The full 1982 book was not accessed; a selected excerpt was read. See the [item evidence record](source-review-batch8-item-quus-rule-following.json).
- **[Newton’s Bucket](../experiments/physics/newtons-bucket.md):** The article now follows Newton’s described sequence, distinguishes it from the familiar stop-the-bucket variation, and qualifies what the argument establishes about absolute space, Leibniz, Mach, and general relativity. The consulted 1915 Mach supplementary volume and Richard Staley’s historical account are linked directly; the article and dataset now list the same eight sources. See the [item evidence record](source-review-batch8-item-newtons-bucket.json).

The three dataset records now match their articles’ Further Reading URLs and use the 2026-11-01 verification date. No public review-status field or badge was added.

## Coverage and limits

This batch brings claim-level audits to **32 of the 57 expansion entries**; **25 remain outside these audits**. Selection prioritized different high-risk areas: decision-theoretic and publication-history claims, contested rule-following interpretation, and technical physics plus attribution of later responses.

Access limits remain explicit in the ledgers. Pascal’s primary text was read in English, not in a critical French edition; the underlying papers by several named critics were not individually read. Kripke’s complete monograph was unavailable, so the primary text check used a selected excerpt alongside the SEP and other consulted passages. Newton’s primary text was read in Motte’s English translation rather than the 1687 Latin edition; Mach’s 1883 bucket passage was not directly retrieved, and Newton’s connected-globes paragraph was not independently read. No human expert reviewed this batch.

## Verification and local state

The repository validator passed for all 132 entries, the documented unittest suite passed all 18 tests, and `git diff --check` passed. Article and dataset reference URLs match for all three entries. Work remains local, unstaged, uncommitted, and unpushed on `audit/source-review-high-risk`; `HEAD` remains `0d26e66`. No merge or release was made.
