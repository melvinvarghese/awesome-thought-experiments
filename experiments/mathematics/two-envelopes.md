# The Two Envelopes Problem

**Category:** mathematics  
**Associated thinker(s):** Multiple contributors; David Chalmers (infinite-expectation extension)  
**Original publication or approximate period:** Modern literature has several versions; Chalmers’s linked extension published 2002  
**Difficulty:** Advanced  
**Type:** puzzle  
**Themes:** conditioning; expectation; priors  
**Related experiments:** st-petersburg-paradox; monty-hall

## 1. The Scenario

Two envelopes contain positive amounts, one twice the other. You receive one at random and may exchange it. If your envelope contains x, a tempting calculation says the other contains either 2x or x/2 with equal chances, giving an expected 5x/4. That appears to recommend switching regardless of the envelope you hold.

But the equal chance of receiving the smaller envelope before opening it does not generally imply equal conditional chances after a particular observed amount x. Those chances depend on how the smaller amount was generated. Treating the observed value as fixed while retaining an unconditional probability can manufacture the apparent advantage.

## 2. The Central Question

When is an expected-gain calculation licensed by the information and probability distribution actually given?

## 3. Why It Matters

The problem teaches a distinction between symmetry before observation and conditioning afterward. It also reveals that infinite expectations require special care: familiar rules about averaging conditional advantages can fail when the relevant signed expectation is undefined. A complete problem statement must specify both the information available and the amount-generating procedure.

## 4. Major Interpretations

**Finite-expectation analysis** preserves the symmetry before opening: random assignment alone creates no unconditional advantage. After observing an amount, a proper prior can make switching sensible in some cases and unwise in others. **Infinite-expectation analysis** recognizes distributions for which conditional calculations remain peculiar; Chalmers’s extension warns against unrestricted dominance and expectation principles. These are distinct mathematical regimes, not a proof that probability is inconsistent.

## 5. Common Misunderstandings

“I do not know which envelope I have” does not justify every proposed 50–50 conditional distribution. The letter x must refer to the same random quantity throughout a calculation. One should not subtract infinity from infinity or rearrange a conditionally problematic expectation as though all sums were finite.

## 6. Think for Yourself

1. Specify a finite distribution over possible smaller amounts and compute the posterior after observing each possible value.
2. What changes if you are forbidden to open your envelope before choosing?
3. Can an apparent gain in every conditional case coexist with an undefined overall expected gain?

## 7. Variations and Extensions

Chalmers’s St. Petersburg variant independently fills the envelopes using an unbounded coin-toss distribution. It isolates the difficulty with infinite expectations rather than merely repeating the ordinary finite-prior mistake.

## 8. Related Thought Experiments

- [The St. Petersburg Paradox](st-petersburg-paradox.md) — A finite payout on every completed play can nevertheless have infinite expected monetary value.
- [The Monty Hall Problem](monty-hall.md) — Switching wins twice as often when an informed host always reveals an unchosen losing door.

## 9. Further Reading

- [David J. Chalmers, The St. Petersburg Two-Envelope Paradox, Analysis 62 (2002)](https://consc.net/papers/stpete.html)

## 10. Sources and Attribution

The author-hosted 2002 paper explicitly distinguishes ordinary prior-based reasoning from infinite-expectation extensions. No single inventor is assigned to the many historical envelope formulations.

Verified on 2026-10-30. Source coverage: [1] Ordinary and infinite expectation versions, conditioning and prior distributions. Reflection questions and illustrative numerical examples are original editorial material.
