# The Frame Problem

**Category:** artificial-intelligence  
**Type:** puzzle  
**Associated thinker(s):** John McCarthy, Patrick Hayes  
**Original publication or approximate period:** McCarthy and Hayes, “Some Philosophical Problems from the Standpoint of Artificial Intelligence” (1969)  
**Difficulty:** Intermediate  
**Themes:** common sense, relevance, representation  
**Related experiments:** [Chinese Room](../consciousness/chinese-room.md); [Blockhead](blockhead.md)

## 1. The Scenario

A robot is asked to move a box from one room to another. It must plan: pick up the box, carry it, put it down. To plan, it must know what its actions change. But it must also know what its actions do not change. Picking up the box does not change the colour of the walls, the date, the position of the sofa, or the number of doors.

Writing down every such non-change as a separate rule quickly becomes unmanageable. The problem is how to represent what stays the same without listing everything.

## 2. The Central Question

How can an agent with limited resources keep track of what is relevant to a change and ignore the rest?

## 3. Why It Matters

In its original form, the frame problem is a technical difficulty in logic-based AI. Philosophers broadened it to a question about how any thinker, human or artificial, can decide what is relevant without checking everything. This links it to questions about common sense, attention and the nature of intelligence.

It has been used both to criticize classical AI and to motivate alternative approaches to cognition.

## 4. Major Interpretations

**The narrow view** treats it as solved by logical techniques, such as default reasoning and event calculi. **The broad view** treats it as an unsolved problem about relevance. **Embodied and situated approaches** hold that the world itself can serve as a memory so that agents need not represent everything. **Skeptics** say the broad problem is not specific to AI.

## 5. Common Misunderstandings

The frame problem is not the same as the problem of processing speed, and it is not only a problem for robots. The narrow and broad versions are distinct. The word “frame” here has no connection to picture frames or to frames in psychology.

## 6. Think for Yourself

1. How do you know what to ignore when you make a cup of tea?
2. Can you list the things that stay the same when you open a door?
3. Is relevance something you compute or something you perceive?
4. Do you think the broad version is a real problem or a confusion?

## 7. Variations and Extensions

Dennett’s fictional robots, which fail by considering too many consequences of their actions, are a popular illustration of the broad version. Treat the story as an illustration rather than a technical result.

## 8. Related Thought Experiments

- [Chinese Room](../consciousness/chinese-room.md)
- [Blockhead](blockhead.md)

## 9. Further Reading

- [Stanford Encyclopedia of Philosophy: The Frame Problem](https://plato.stanford.edu/entries/frame-problem/) — The original formal problem, its broader philosophical readings and proposed solutions.

## 10. Sources and Attribution

The Stanford Encyclopedia of Philosophy entry on the frame problem was consulted for the narrow and broad versions. The original 1969 paper was not retrieved. The page consulted does mention Dennett and a robot-and-bomb example, which was confirmed by a keyword check; the details of that story were not read.

Research check: 2026-10-31. Access levels for each reference are recorded in [research/expansion.md](../../research/expansion.md); this is an original educational explanation, not a substitute for the primary texts. Additional comparisons are teaching prompts, not established historical variations.

[Return to collection](../../README.md)
