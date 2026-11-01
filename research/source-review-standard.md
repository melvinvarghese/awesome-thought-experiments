# Source-review standard

**Status:** Approved for this local source-review batch on 2026-11-01; not a public quality badge or a change to the dataset schema.

## Purpose and scope

A source review checks whether each important claim in an educational entry is traceable to evidence in its cited source and whether the source is being represented within its actual scope. It does not establish that a philosophical argument is sound, that a disputed conclusion is true, or that an entry has received expert review. Topic overlap, a successful URL request, and an abstract alone do not count as reading the source passage that supports a claim.

Review entries at the level of material claims and attributions: the original setup, attributed assumptions, argument structure, conclusions, important qualifications, publication/name/date claims, and claims about scholarly disagreement. Label teaching prompts and analogies as the article's own framing when they are not part of the cited source.

## Keep four dimensions separate

1. **Entry status** describes how much of the declared claim scope has been checked.
2. **Source type** identifies the role of a source: primary work, peer-reviewed secondary analysis, reference work, or other.
3. **Access level** records what was actually read: URL/metadata only, abstract or catalogue record, selected excerpt, relevant passages in the full work, or the full work. A PDF retrieved but not parsed is not full-text access.
4. **Claim relationship** records whether a cited passage directly supports, qualifies, contextualizes, contradicts, or fails to establish the attached claim.

Do not collapse these into a numerical score. A primary source can establish what its author argued without establishing that the argument succeeds. A secondary source can establish that a published objection exists without making that objection the consensus view.

## Entry statuses

- **Needs source check** (`needs_source_check`): no relevant source passage has been consulted for the material claims in scope. A link, search result, or topic-coverage check alone remains at this status.
- **Partially source-checked** (`partially_source_checked`): some material claim-to-source relationships have been checked, but important claims remain unchecked, unsupported, or represented only by an abstract, catalogue record, or excerpt that does not establish the relevant passage.
- **Source-checked** (`source_checked`): the complete primary text or another appropriate source has been accessed; relevant passages have been read; each material claim in the declared scope is linked to evidence or explicitly marked as the entry's interpretation; material qualifications and known disagreement are represented fairly. This is an editorial traceability status, not a claim of truth, consensus, exhaustive literature review, or peer review.
- **Expert-reviewed** (`expert_reviewed`): a named, qualified human subject-matter reviewer has reviewed a specified scope and date, has approved the stated attribution, and has agreed to be credited. Record the reviewer's name/role, scope, date, and permission to credit. Agent review, editor review, or source checking never qualifies.

An entry status is conservative: if a material claim in scope is unresolved, use the lower status and state what remains. Reassess it when claims change or new evidence affects the argument; a check date records when the consultation occurred, not a guarantee of continuing accuracy.

## Evidence record

For each reviewed entry, keep a versioned, human-readable ledger record with:

- stable entry ID, article path, review date, status, scope, reviewer type, and protocol version;
- each material claim or attribution checked;
- source title, author, publication details, stable URL, source type, and access level;
- the exact page/section or passage location read;
- the relationship to the claim (`supports`, `supports_with_qualification`, `context_only`, `contradicts`, or `does_not_establish`);
- limitations, unresolved interpretations, access gaps, and any required local edit.

Separate a source's metadata from its argument and from the reviewer's inference. Preserve disagreement by naming the relevant authors and what each argues. Avoid describing one paper as “the literature” or “the consensus” unless that broader claim has been separately researched.

## Publication and data-model rule

Keep this ledger outside `data/experiments.json` until the article schema, article metadata, README generator, and site use have been reviewed together and the owner approves a single source of truth and validator behavior. Do not add public review badges or imply expert approval as a side effect of an audit. The batch ledger created alongside this standard is local review evidence, not a new public product guarantee.
