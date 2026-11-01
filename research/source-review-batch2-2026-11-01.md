# Source Review: Second, Normal-Risk Batch

**Outcome:** Five entries received claim-level source checks, targeted revisions, and independent read-only post-edit review. All five are now marked `source_checked` for the claims and scope recorded in the accompanying [evidence ledger](source-review-batch2-2026-11-01.json). This does not mean the philosophical conclusions are settled, that every primary work was read in full, or that the entries received human expert review.

## What changed

- [Hume’s Missing Shade of Blue](../experiments/epistemology/humes-missing-shade-of-blue.md): corrected the passage’s attribution to *An Enquiry concerning Human Understanding* II.8; separated it from the earlier copy principle in the *Treatise*; retained Hume’s qualification; removed an unsupported account of defenders; and labeled Mary’s Room as a teaching comparison.
- [Descartes’s Piece of Wax](../experiments/epistemology/wax-argument.md): clarified that the wax’s sensible qualities change while the mind judges it to be the same wax; added the window example; and removed unsupported claims about scholarly camps. The revised paraphrase was checked against a Lancaster-hosted English translation and the SEP; translation wording varies.
- [Twin Earth](../experiments/consciousness/twin-earth.md): clarified that the twins share a psychological state, distinguished reference and extension from broader meaning and content, and separated Putnam’s 1975 case from his later brain-in-a-vat argument. After the independent reviewer asked for a more explicit qualification, the article now says the later argument and the scope of externalism needed to support it remain disputed.
- [Hesperus and Phosphorus](../experiments/logic/hesperus-and-phosphorus.md): removed unsupported ancient naming chronology, distinguished Frege’s morning-star/evening-star illustration from the Hesperus/Phosphorus formulation, and qualified the Kripkean modal discussion.
- [Arrow’s Impossibility Theorem](../experiments/society-and-justice/arrows-impossibility-theorem.md): stated all five conditions, including Social Ordering; clarified the theorem’s scope; and disclosed that the detailed statement relies on the SEP because the full original proof was not read.

## Gate B assessment

The approved source-review standard proved workable for this bounded normal-risk batch. Claim-level records exposed concrete attribution, scope, and qualification issues; independent post-edit checks caught one remaining Twin Earth caveat and a Hume section-title/URL mismatch. Both were corrected and checked again.

Recommendation: continue with risk-ranked, bounded batches rather than scaling immediately across the 49 expansion entries not yet audited. These two batches cover eight of the original 57 expansion entries, which is enough to support the standard’s use in small batches but not to establish that a full-scale audit will preserve the same quality or throughput.

## Verification and limits

The repository validator and all 18 unit tests pass. A separate check found that each of the five articles’ Further Reading URLs exactly matches its dataset references, and `git diff --check` is clean. The validator checks URL syntax, not whether every external page is currently available.

This batch remains local, uncommitted, and unpushed. The first high-risk batch was pushed separately to its feature branch under prior approval; no merge to `main`, release, or deployment is part of this work.
