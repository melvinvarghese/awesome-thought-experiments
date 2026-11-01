# The Monty Hall Problem

**Category:** mathematics  
**Associated thinker(s):** Steve Selvin; Marilyn vos Savant  
**Original publication or approximate period:** Modern three-door formulation associated with Selvin (1975); later popular discussion  
**Difficulty:** Beginner  
**Type:** puzzle  
**Themes:** conditioning; information; protocols  
**Related experiments:** bertrands-paradox; two-envelopes

## 1. The Scenario

Three doors conceal one prize and two losing outcomes. The prize is placed uniformly. You choose a door. A host who knows the prize location always opens an unchosen losing door and always offers you the remaining closed door. When two losing doors are available, assume the host selects randomly between them.

Before any opening, your chosen door wins with probability 1/3. A strategy of always switching wins exactly when your first selection was wrong, which happens with probability 2/3. Enumerate the three possible prize positions to check this without relying on intuition about the two doors left on screen.

## 2. The Central Question

Does an informed host’s constrained reveal make the remaining unchosen door more likely to win?

## 3. Why It Matters

This is a probability puzzle, not an unresolved metaphysical paradox. Its value is the habit of specifying how information is generated. “A losing door opened” and “a host following this protocol opened a losing door” are different evidence descriptions. Conditional probability must represent the latter when that is how the observation occurred.

## 4. Major Interpretations

**Strategy enumeration** counts the first-choice wins and losses and shows the 2/3 switching success rate. **Bayesian conditioning** reaches the same conclusion using the host’s opening probabilities. **Different host rules** can produce different posterior probabilities. Those are different problems; they do not create equally valid answers to the same fully specified protocol.

## 5. Common Misunderstandings

Two remaining possibilities need not be equally likely. A host who accidentally reveals a losing door without knowing the prize location supplies different evidence. A host who offers a switch only when it hurts you destroys the usual strategy guarantee. The host protocol is part of the mathematics, not an optional story detail.

## 6. Think for Yourself

1. How would the answer change if the host did not know where the prize was?
2. Write a three-row table showing when an always-switch strategy wins.
3. If the host preferentially opens the leftmost available door, what changes when you condition on the particular door opened?

## 7. Variations and Extensions

With many doors and an informed host removing all but one unchosen loser, the advantage of switching becomes easier to see. Selective offers and nonrandom tie-breaking require their own calculations.

## 8. Related Thought Experiments

- [Bertrand’s Random Chord Paradox](bertrands-paradox.md) — Different precise procedures for choosing a “random chord” yield different probabilities.
- [The Two Envelopes Problem](two-envelopes.md) — A tempting switching calculation hides an unjustified conditional probability assignment.

## 9. Further Reading

- [Philip B. Stark, The Let’s Make a Deal (Monty Hall) Problem — UC Berkeley](https://www.stat.berkeley.edu/pub/users/stark/SticiGui/Text/montyHall.htm)
- [Monty hall problem — Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Monty_hall_problem)

## 10. Sources and Attribution

The Berkeley treatment verifies the protocol and solution. The 1975 attribution identifies the familiar modern version rather than claiming no earlier related puzzles existed; the main mathematical argument is supplied here explicitly.

Verified on 2026-10-30. Source coverage: [1] Explicit host protocol and conditional probability solution. [2] Selvin’s 1975 letters and later popular discussion. Reflection questions and illustrative numerical examples are original editorial material.

[Return to collection](../../index.html)
