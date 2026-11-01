# The St. Petersburg Paradox

**Category:** mathematics  
**Associated thinker(s):** Nicolaus Bernoulli; Daniel Bernoulli  
**Original publication or approximate period:** Nicolaus Bernoulli’s correspondence (1713); Daniel Bernoulli’s published treatment (1738)  
**Difficulty:** Intermediate  
**Type:** puzzle  
**Themes:** expectation; utility; infinity  
**Related experiments:** two-envelopes; hilberts-hotel

## 1. The Scenario

Flip a fair coin until its first heads. If that happens on toss n, the prize is 2^n monetary units. Thus half of games pay 2, a quarter pay 4, an eighth pay 8, and so on. How much would you pay to enter once?

Every term in the expected monetary payout is 2^(−n) × 2^n = 1. Summing over all possible n gives an unbounded expectation. Yet most actual games finish quickly, and many people would decline to risk a large fraction of their wealth on one play. Each completed payout is finite even though the expectation is not.

## 2. The Central Question

Does infinite expected money make every finite entry fee rational?

## 3. Why It Matters

The puzzle separates expected money from expected value to an agent. It also exposes the unusual behavior of unbounded distributions. An average can be mathematically well-defined in an extended sense without behaving like the familiar average of bounded classroom gambles.

## 4. Major Interpretations

**Utility-based responses** model diminishing marginal value of money rather than treating each additional unit as equally valuable. Appropriate bounded utility functions avoid an infinite utility expectation. **Feasibility responses** cap the bank’s resources or the duration of play, creating a different, finite game. **Foundational responses** ask whether expected-utility maximization needs further limits in unbounded cases. These approaches address different assumptions and need not be mutually exclusive.

## 5. Common Misunderstandings

The paradox is not a formal contradiction. A diverging monetary expectation does not guarantee a huge win in one play. Simply taking a logarithm is not a universal cure for every possible unbounded payoff distribution; the payoff schedule can be changed to create further challenges. A real bank cannot supply arbitrarily large prizes.

## 6. Think for Yourself

1. Calculate the expected payout if prizes stop doubling after ten tosses.
2. How should an entry fee depend on whether losing it would threaten your basic needs?
3. Does repeating a gamble solve every difficulty when the expectation is infinite?

## 7. Variations and Extensions

Generalized games alter the growth of payoffs. Two-envelope variants mix infinite expectations with conditional reasoning, making it especially important to check convergence before manipulating averages.

## 8. Related Thought Experiments

- [The Two Envelopes Problem](two-envelopes.md) — A tempting switching calculation hides an unjustified conditional probability assignment.
- [Hilbert’s Hotel](hilberts-hotel.md) — A fully occupied infinite hotel can accommodate more guests without evicting anyone.

## 9. Further Reading

- [The St. Petersburg Paradox — Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/paradox-stpetersburg/)

## 10. Sources and Attribution

The scholarly history distinguishes Nicolaus’s initial proposal from Daniel’s later publication. The standard fair-coin game is a simplified later formulation; it is not identified as a verbatim copy of the earliest letter.

Verified on 2026-10-30. Source coverage: [1] Nicolaus Bernoulli’s 1713 letter, Daniel Bernoulli’s 1738 treatment, infinite expectation. Reflection questions and illustrative numerical examples are original editorial material.

[Return to collection](../../index.html)
