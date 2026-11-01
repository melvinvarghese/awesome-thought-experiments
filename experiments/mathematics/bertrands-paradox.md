# Bertrand’s Random Chord Paradox

**Category:** mathematics  
**Associated thinker(s):** Joseph Bertrand  
**Original publication or approximate period:** Calcul des probabilités (1889)  
**Difficulty:** Intermediate  
**Type:** puzzle  
**Themes:** randomness; measure; indifference  
**Related experiments:** monty-hall; two-envelopes

## 1. The Scenario

Draw a circle and ask whether a randomly selected chord is longer than a side of the inscribed equilateral triangle. The phrase “randomly selected” is incomplete. One construction fixes an endpoint and picks the other uniformly around the circumference. Another selects a direction and then a uniformly distributed distance from the center along a radius. A third chooses a midpoint uniformly by area inside the disk.

A chord is sufficiently long precisely when its midpoint is less than half the radius from the center. The radial-distance procedure therefore gives 1/2, while uniform midpoint area gives 1/4. Uniform endpoints give 1/3. These are distributions over different constructions.

## 2. The Central Question

Can symmetry or ignorance alone determine a unique probability for a geometric event?

## 3. Why It Matters

The example shows that a probability measure must accompany a sample space. Several descriptions can sound equally impartial while assigning different weights to the same geometric objects. Calling a process random does not specify the physical preparation, coordinate convention, or mathematical distribution that makes its probabilities meaningful.

## 4. Major Interpretations

**Procedure-based resolution:** once the sampling mechanism is specified, the numerical answer is well-defined; the three values are compatible results for different mechanisms. **Indifference-based approaches:** additional invariance requirements may be proposed to justify a preferred measure for a specified context. Their adequacy depends on why those requirements apply. The example is not a contradiction in the axioms of probability.

## 5. Common Misunderstandings

Uniformity in radius is not uniformity in area, because annuli farther from the center contain more area. One cannot declare all conceivable chord-generation methods equivalent merely because each uses a random number. Nor does the paradox imply that probabilities are always subjective or arbitrary.

## 6. Think for Yourself

1. Which physical apparatus would implement each sampling method?
2. Why is the central half-radius disk only one quarter of the total area?
3. What would justify choosing invariance under translations rather than one particular coordinate parameterization?

## 7. Variations and Extensions

Related puzzles arise when ignorance is treated as a unique uniform prior. Monty Hall differs because a fully specified host protocol supplies the relevant data-generating process.

## 8. Related Thought Experiments

- [The Monty Hall Problem](monty-hall.md) — Switching wins twice as often when an informed host always reveals an unchosen losing door.
- [The Two Envelopes Problem](two-envelopes.md) — A tempting switching calculation hides an unjustified conditional probability assignment.

## 9. Further Reading

- [Probability and Induction — Internet Encyclopedia of Philosophy](https://iep.utm.edu/probability-and-induction/)
- [Interpretations of Probability — Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/probability-interpret/)

## 10. Sources and Attribution

The retrieved probability references support Bertrand’s example and the difficulty for unrestricted indifference. The geometric midpoint calculation is shown explicitly. Different measures are kept separate rather than treated as competing solutions to one fixed experiment.

Verified on 2026-10-30. Source coverage: [1] Principle of indifference and Bertrand’s random chord example. [2] Interpretation of probabilities and nonunique indifference assignments. Reflection questions and illustrative numerical examples are original editorial material.

[Return to collection](../../index.html)
