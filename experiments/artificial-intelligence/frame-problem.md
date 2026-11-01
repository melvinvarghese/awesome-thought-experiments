# The Frame Problem

**Category:** artificial-intelligence  
**Type:** puzzle  
**Associated thinker(s):** John McCarthy, Patrick Hayes  
**Original publication or approximate period:** McCarthy and Hayes, “Some Philosophical Problems from the Standpoint of Artificial Intelligence” (1969)  
**Difficulty:** Intermediate  
**Themes:** common sense, relevance, representation  
**Related experiments:** [Chinese Room](../consciousness/chinese-room.md); [Blockhead](blockhead.md)

## 1. The Scenario

As a simple illustration, imagine a robot asked to move a box from one room to another. The intended changes are easy to describe; the challenge is also representing what stays the same. McCarthy and Hayes noted that a straightforward formalization with n actions and m fluents (properties of situations) might require as many as n×m conditions stating what each action leaves unchanged.

The problem is how to represent relevant non-effects without separately listing every case.

## 2. The Central Question

In the broader epistemological version, how can an agent decide which consequences and information are relevant to an action without considering everything?

## 3. Why It Matters

The original problem was technical and arose in logic-based AI. Some philosophers later used it to frame broader questions about belief revision and relevance in human and artificial cognition. The relationship between these questions and the original formal problem is debated.

The wider discussion connects to common-sense reasoning and attention. Some philosophers have used it to challenge classical AI’s reliance on explicit symbolic representations; situated and other approaches have been proposed, though whether they solve or avoid the problem remains contested.

## 4. Major Interpretations

For the narrow formal problem, researchers developed workable logical approaches, including non-monotonic reasoning. Event calculus is one formalism for representing events, time, and persistence; it does not by itself resolve the broader relevance question.

Some philosophers regard the broader problem as open, while others dispute its force or propose that it can be avoided or dissolved. Some situated-robotics approaches avoid explicit symbolic representations. Wheeler treats this approach as promising, while Dreyfus argues that Brooks’s early robots finesse rather than solve the problem.

## 5. Common Misunderstandings

The frame problem is not merely a question of processor speed. Its technical form concerns representing action effects and non-effects; a related computational question concerns tractably limiting inference, while the broader epistemological question concerns how relevance is determined. The broader discussion also extends to human cognition, not only robots.

## 6. Think for Yourself

1. How do you know what to ignore when you make a cup of tea?
2. Can you list the things that stay the same when you open a door?
3. Is relevance something you compute or something you perceive?
4. Do you think the broad version is a real problem or a confusion?

## 7. Variations and Extensions

In “Cognitive Wheels,” Daniel Dennett presents fictional robots that fail through unnoticed side effects or excessive deliberation. The story illustrates his interpretation of the frame problem; it is not a formal result or a settled account shared by all researchers.

## 8. Related Thought Experiments

- [Chinese Room](../consciousness/chinese-room.md)
- [Blockhead](blockhead.md)

These are optional thematic comparisons, not historical variants of the frame problem.

## 9. Further Reading

- [Stanford Encyclopedia of Philosophy: The Frame Problem](https://plato.stanford.edu/entries/frame-problem/) — Technical, computational, and epistemological formulations and the debate over responses.
- [John McCarthy and Patrick Hayes, “Some Philosophical Problems from the Standpoint of Artificial Intelligence” (1969)](https://www-formal.stanford.edu/jmc/mcchay69.pdf) — The original formal problem, including §4.3.
- [Robert Kowalski and Marek Sergot, “A Logic-based Calculus of Events”](https://www.doc.ic.ac.uk/~rak/papers/event%20calculus.pdf) — An event calculus for representing events, time, and persistence.
- [Daniel Dennett, “Cognitive Wheels: The Frame Problem of AI”](https://www.cs.sfu.ca/~vaughan/teaching/415/papers/dennett-cognitivewheels.html) — Dennett’s fictional robot story and broader interpretation.

## 10. Sources and Attribution

The Stanford Encyclopedia of Philosophy entry was consulted in §§1–5. McCarthy and Hayes’s 1969 paper was retrieved; its front matter and §4.3 (printed p. 30) were read. Kowalski and Sergot’s “A Logic-based Calculus of Events” was consulted in its introduction and §2. Dennett’s “Cognitive Wheels” was read at the opening robot story and the following discussion of frame axioms and relevance. The box scenario is an illustration written for this entry; the Chinese Room and Blockhead links are editorial thematic comparisons. The sources distinguish formal, computational, and epistemological issues; this is source checking, not expert review.

Research check: 2026-11-01. Further comparisons are teaching prompts, not established historical variations.

[Return to collection](../../README.md)
