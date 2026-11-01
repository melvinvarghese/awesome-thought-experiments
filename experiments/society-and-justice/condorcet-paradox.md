# The Condorcet Paradox

**Category:** society-and-justice  
**Type:** paradox  
**Associated thinker(s):** Marquis de Condorcet  
**Original publication or approximate period:** Condorcet, *Essay on the Application of Analysis to the Probability of Majority Decisions* (1785)
**Difficulty:** Intermediate  
**Themes:** majority rule, cycles, voting  
**Related experiments:** [Arrow’s Impossibility Theorem](arrows-impossibility-theorem.md); [Sen’s Paradox of the Paretian Liberal](sens-liberal-paradox.md)

## 1. The Scenario

Assume each voter has a strict, transitive ranking of the three options, and compare each pair by simple majority. The profile is:

| Voter | First | Second | Third |
| --- | --- | --- | --- |
| 1 | A | B | C |
| 2 | B | C | A |
| 3 | C | A | B |

A beats B by two votes to one; B beats C by two to one; and C beats A by two to one. Thus, the pairwise majority relation is A over B, B over C, and C over A: a cycle. The arithmetic follows directly from the stated profile; this pattern is discussed in modern social-choice reference accounts [2–4].

## 2. The Central Question

Can individually transitive rankings produce an intransitive pairwise-majority relation, and what should a group do when no option defeats every other option in a pairwise vote?

## 3. Why It Matters

Each voter's ranking is transitive, but the majority relation need not be. In this profile, no option beats every other option, so there is no Condorcet winner. This is a mathematical result about aggregating pairwise comparisons; it does not by itself establish that majority rule is always incoherent or settle what counts as a legitimate collective choice [2, 4].

The cycle also does not, by itself, make the pairwise comparisons depend on voting order: each comparison is fixed by the profile. If a group instead uses a sequence of pairwise votes, the agenda—the order in which options are brought forward—can affect the final surviving option when preferences cycle [5].

Condorcet's analysis is an important historical precursor to modern social-choice theory. Arrow later studied a broader class of preference-aggregation rules under explicit conditions; his theorem is related to, but not simply derived from, this three-option example [2, 4].

## 4. Major Interpretations

**Choosing a winner.** A Condorcet-consistent rule elects a Condorcet winner when one exists. In a cycle such as this one there is no such candidate, so the procedure needs an additional rule for resolving or reporting the cycle. Other methods, including scoring rules, can produce an outcome, but that does not make the pairwise-majority relation transitive or guarantee that the selected option would beat each rival head-to-head [3].

**Restricting the preference domain.** Some restrictions on admissible rankings prevent cycles. For example, if preferences are single-peaked along a common ordering of the options, majority preferences are transitive and, with an odd number of voters, the median voter's peak is a Condorcet winner. This is a conditional mathematical result, not a claim that real electorates always satisfy the restriction [2].

**Interpreting the result.** The example establishes that a pairwise-majority ranking can cycle; it does not decide whether that is a defect in majority rule, a reason to adopt another procedure, or a feature that a particular decision process can tolerate. Those are normative questions, and arguments about the implications of social-choice results differ [4].

## 5. Common Misunderstandings

A cycle is possible, not inevitable: it occurs for some preference profiles and not others. The result concerns the collective pairwise-majority relation even though each individual ranking is transitive [2, 3].

A cycle means no Condorcet winner exists for that profile. It does not mean that a group cannot select an option; a voting rule can specify a tie-break or another way to choose, with its own properties [3].

Agenda effects concern sequential procedures for turning pairwise votes into one final outcome. They should not be confused with the cycle itself, which describes the set of pairwise-majority comparisons [5].

## 6. Think for Yourself

1. If this were an election, what rule should apply when every option loses a pairwise comparison?
2. If the group votes on pairs sequentially, how could changing the agenda affect the final option?
3. Is a cycle a reason to reject a procedure, or does its significance depend on what the procedure is meant to achieve?
4. What evidence would be needed to estimate how often such cycles occur in actual elections?

## 7. Variations and Extensions

With more voters and alternatives, cycles can involve more options. Claims about how often cycles occur require assumptions about how preference profiles are distributed. Under the commonly studied impartial-culture model, all strict rankings are treated as equally likely; other preference distributions can yield different probabilities. Empirical work has disagreed about how much the theoretical risk appears in real elections, in part because data often do not record voters' rankings of every pair of alternatives [2, 3, 6].

## 8. Related Thought Experiments

- [Arrow’s Impossibility Theorem](arrows-impossibility-theorem.md)
- [Sen’s Paradox of the Paretian Liberal](sens-liberal-paradox.md)

## 9. Further Reading

- [Condorcet, *Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix* (1785), digitized French text](https://archive.org/details/essaisurlapplica00cond) — The original French work; the cited passage discusses an election among three candidates and majority judgments.
- [Christian List, “Social Choice Theory,” Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/social-choice/) — The historical account, formal framework, majority cycles, and domain restrictions.
- [Eric Pacuit, “Voting Methods,” Stanford Encyclopedia of Philosophy (Fall 2017 archive)](https://plato.stanford.edu/archives/fall2017/entries/voting-methods/) — Condorcet cycles, Condorcet-consistent methods, and the assumptions behind probability estimates.
- [Michael Morreau, “Arrow’s Theorem,” Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/arrows-theorem/) — The paradox of voting and its relation to Arrow’s broader theorem and normative debate.
- [Nicholas R. Miller, “Complexities of Majority Voting” (revised 2018)](https://userpages.umbc.edu/~nmiller/RESEARCH/MAJVOTING.REV2018.NRM.pdf) — Condorcet cycles and sequential pairwise voting under different agendas.
- [Michel Regenwetter et al., “Behavioural social choice: a status report” (2009)](https://pmc.ncbi.nlm.nih.gov/articles/PMC2689718/) — A scholarly account of assumptions and disagreement about the empirical prevalence of majority cycles.

## 10. Sources and Attribution

Condorcet's 1785 French essay was consulted at the passage in the *Discours préliminaire* discussing an election among three candidates and the aggregation of majority judgments. The original text considers how judgments about which candidate is preferable combine and notes that some combinations produce contradictory conclusions. The example in §1 is a modern teaching presentation, with its pairwise results calculated directly from the stated rankings; it is not presented as a verbatim translation of Condorcet's exact profile. Modern reference works supply the English-language historical framing and formal context [2, 4].

The philosophical questions about fairness and legitimacy are prompts for discussion, not conclusions established by the mathematical result. Research check: 2026-11-01. This is an educational explanation, not a substitute for the primary text or a comprehensive review of the social-choice literature. Sources were checked at the relevant passages listed in the local evidence ledger; the cited sources differ in type and scope.

[Return to collection](../../README.md)
