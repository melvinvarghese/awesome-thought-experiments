# Batch 9: Three Risk-Ranked Entries Source-Checked

**Outcome:** Three entries received claim-level source audits, targeted edits, and independent read-only post-edit reviews. All three are `source_checked` for the claim-traceability scopes in their evidence records. This does not establish that an argument is sound, a scientific interpretation is settled, or an entry received human expert review.

## What changed

- **[Utility Monster](../experiments/ethics/utility-monster.md):** Added Nozick’s primary passage from *Anarchy, State, and Utopia* (1974), chapter 3, p. 41. The article now keeps Nozick’s qualified claim distinct from a separately labelled numerical illustration and limits its result to an unrestricted additive total-utility rule under explicit assumptions. Chappell’s negative-utility variation is identified as a separate case; the publisher abstract, not the full article, was accessed. See the [item evidence record](source-review-batch9-item-utility-monster.json).
- **[The AI Box Scenario](../experiments/artificial-intelligence/ai-box.md):** Added Yudkowsky’s accessible retrospective account and contemporary 2002 mailing-list messages for the two reported role-play outcomes. The article distinguishes Yudkowsky’s later suggested protocol from the original trials’ prior terms, identifies Armstrong, Sandberg, and Bostrom as later authors of a peer-reviewed 2012 analysis, and states that the role-play does not establish actual AI capabilities. See the [item evidence record](source-review-batch9-item-ai-box.json).
- **[The Spandrels of San Marco](../experiments/science-and-biology/spandrels-of-san-marco.md):** Read the relevant passages in the full 1979 paper reproduction, Gould’s 1997 clarification, and Gould and Vrba’s 1982 exaptation paper. The article now distinguishes the claimed byproduct properties from structural utility, qualifies the contested architectural term, and attributes “exaptation” to the later 1982 paper. See the [item evidence record](source-review-batch9-item-spandrels-of-san-marco.json).

## Coverage and limits

This batch brings the claim-level audit total to **35 of the 57 expansion entries**; **22 remain outside these audits**. Selection prioritized documented evidence gaps: an unread original passage and abstract-only related paper for Utility Monster; an inaccessible original AI-box page and uncertain historical attribution; and bibliographic-record-only access to the original Spandrels paper plus disputed terminology.

Access limits remain explicit. Nozick’s relevant passage was read in a University of Colorado-hosted PDF reproduction, not the whole book; Chappell’s full article was unavailable. The AI-box account is retrospective, private chat transcripts were not consulted, and the role-play says nothing conclusive about actual AI capability. The 1979 Spandrels paper was read in a third-party-hosted reproduction because the publisher full text is paywalled; the scan/OCR may contain errors. No named human subject-matter expert reviewed this batch.

## Verification and local state

The repository validator passed for all 132 entries, all 18 unit tests passed, `git diff --check` passed, and the Further Reading URL sets match the dataset references for all three entries. The item ledgers parse as JSON. Work remains local, unstaged, uncommitted, and unpushed on `audit/source-review-high-risk`; `HEAD` remains `0d26e66`. No merge, release, or remote-branch change was made.

The [consolidated batch evidence ledger](source-review-batch9-2026-11-01.json) contains all three full item records.