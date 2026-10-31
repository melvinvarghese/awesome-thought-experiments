# Simpson’s Paradox

**Category:** mathematics  
**Type:** paradox  
**Associated thinker(s):** Edward H. Simpson  
**Original publication or approximate period:** Named for Simpson (1951); earlier observations of the phenomenon are recorded in the literature  
**Difficulty:** Intermediate  
**Themes:** confounding, causal inference, aggregation  
**Related experiments:** [The Monty Hall Problem](monty-hall.md); [Sleeping Beauty](sleeping-beauty.md)

## 1. The Scenario

Two treatments, A and B, are compared for a condition in which patients have either small or large stones. The numbers below are illustrative, of the kind used in a widely taught medical example.

| | Small stones | Large stones | All patients |
| --- | --- | --- | --- |
| Treatment A | 81/87 (93%) | 192/263 (73%) | 273/350 (78%) |
| Treatment B | 234/270 (87%) | 55/80 (69%) | 289/350 (83%) |

Treatment A has the higher success rate for small stones and for large stones. Yet Treatment B has the higher success rate overall.

## 2. The Central Question

How can a treatment do better in every subgroup but worse overall, and which comparison should guide a decision?

## 3. Why It Matters

The reversal happens because the groups differ in size and difficulty: Treatment A was used more often on the hard cases. The overall rate mixes the effect of the treatment with the effect of case difficulty. The paradox is a warning against drawing conclusions from aggregated data.

Which table to trust depends on the causal story. If stone size affects which treatment is chosen, the stratified comparison is more informative. In other stories, aggregation is better.

## 4. Major Interpretations

**Causal approaches** say the right analysis depends on a causal diagram of the variables, not on the numbers alone. **Statistical approaches** emphasize adjusting for confounders. **Decision-theoretic views** ask which comparison matches the choice a decision-maker faces. All agree that the numbers by themselves do not settle the question.

## 5. Common Misunderstandings

Nothing in the arithmetic is wrong, and the paradox does not show that statistics is unreliable. It also does not mean that subgroup comparisons are always better. The numbers are illustrative; the claim is about the structure, not about real treatments.

## 6. Think for Yourself

1. Which treatment would you choose, and what do you need to know to decide?
2. How would the answer change if the stone size were caused by the treatment?
3. Can you build a new set of numbers with the same reversal?
4. Where might this kind of reversal occur in a policy or sports statistic?

## 7. Variations and Extensions

Admissions data, batting averages, and clinical trials have all produced examples. In each, the interpretation depends on the causal structure, which should be stated.

## 8. Related Thought Experiments

- [The Monty Hall Problem](monty-hall.md)
- [Sleeping Beauty](sleeping-beauty.md)

## 9. Further Reading

- [Stanford Encyclopedia of Philosophy: Simpson’s Paradox](https://plato.stanford.edu/entries/paradox-simpson/) — The statistical reversal, its causal interpretation and examples.

## 10. Sources and Attribution

The Stanford Encyclopedia of Philosophy entry on Simpson’s paradox was consulted. The numbers in the table are illustrative figures of the kind widely used in teaching, and they were recomputed here to confirm the percentages; they are not a claim about a particular study.

Research check: 2026-10-31. Access levels for each reference are recorded in [research/expansion.md](../../research/expansion.md); this is an original educational explanation, not a substitute for the primary texts. Additional comparisons are teaching prompts, not established historical variations.

[Return to collection](../../README.md)
