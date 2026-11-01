# Simpson’s Paradox

**Category:** mathematics  
**Type:** paradox  
**Associated thinker(s):** Edward H. Simpson  
**Original publication or approximate period:** Simpson (1951); earlier discussions by Karl Pearson (1899) and George Yule (1903)
**Difficulty:** Intermediate  
**Themes:** confounding, causal inference, aggregation  
**Related experiments:** [The Monty Hall Problem](monty-hall.md); [Sleeping Beauty](sleeping-beauty.md)

## 1. The Scenario

The figures below reproduce two treatment groups from Charig and colleagues’ 1986 comparison of kidney-stone treatments: open surgery and percutaneous nephrolithotomy (PCNL). The study also examined other treatments. Its size categories were a mean stone diameter below 2 cm, and a mean diameter of 2 cm or more or multiple stones.

| Treatment | Mean diameter <2 cm | Mean diameter ≥2 cm or multiple stones | Both displayed treatment groups |
| --- | --- | --- | --- |
| Open surgery | 81/87 (93%) | 192/263 (73%) | 273/350 (78%) |
| PCNL | 234/270 (87%) | 55/80 (69%) | 289/350 (83%) |

Open surgery has the higher observed success rate in each displayed category, yet PCNL has the higher combined rate for these two groups.

## 2. The Central Question

How can a treatment do better in every subgroup but worse overall, and which comparison should guide a decision?

## 3. Why It Matters

The two treatment groups had different mixes of stone cases. Larger or multiple-stone cases made up a much bigger share of the open-surgery group, while smaller-stone cases made up a much bigger share of the PCNL group. Because the group-2 success rates are lower, combining groups with different proportions reverses the overall comparison.

These are observed rates, not by themselves evidence that one treatment caused better outcomes. Which comparison is relevant depends on the question, target population, and causal assumptions. Stratification can help address confounding when the variables and assumptions are appropriate, but it is not automatically the right answer.

## 4. Major Interpretations

Causal analyses ask how treatment assignment and outcomes are related and whether the causal effect is identifiable under a specified model. Statistical adjustment can address measured confounders only under suitable assumptions. Decision-theoretic approaches ask which population and outcome matter for the choice. The numerical reversal alone does not determine which rate answers a particular question.

## 5. Common Misunderstandings

Nothing in the arithmetic is wrong, and the table reproduces observed results from a published clinical comparison. The reversal does not show that statistics is unreliable or establish that either treatment is causally superior. It also does not mean that subgroup comparisons are always preferable.

## 6. Think for Yourself

1. Which treatment would you choose, and what do you need to know to decide?
2. How would the answer change if the stone size were caused by the treatment?
3. Can you build a new set of numbers with the same reversal?
4. Where might this kind of reversal occur in a policy or sports statistic?

## 7. Variations and Extensions

Simpson-like reversals have been discussed in epidemiology, meta-analysis, decision theory, and analyses of discrimination. Whether aggregation or stratification answers a question depends on how the data were generated and on the comparison being asked for.

## 8. Related Thought Experiments

- [The Monty Hall Problem](monty-hall.md)
- [Sleeping Beauty](sleeping-beauty.md)

## 9. Further Reading

- C. R. Charig, D. R. Webb, S. R. Payne, and J. E. Wickham, [“Comparison of treatment of renal calculi by open surgery, percutaneous nephrolithotomy, and extracorporeal shockwave lithotripsy”](https://www.bmj.com/content/292/6524/879.full.pdf), *British Medical Journal* 292 (1986): 879–882 — the primary clinical comparison and table reproduced here.
- Stefanos Bonovas and Daniele Piovani, [“Simpson’s Paradox in Clinical Research: A Cautionary Tale”](https://pmc.ncbi.nlm.nih.gov/articles/PMC9960320/), *Journal of Clinical Medicine* 12(4) (2023): 1633 — reproduces the kidney-stone table and discusses its interpretation.
- Jan Sprenger and Naftali Weinberger, [“Simpson’s Paradox”](https://plato.stanford.edu/archives/sum2026/entries/paradox-simpson/), *Stanford Encyclopedia of Philosophy*, Summer 2026 edition — mathematical characterizations, causal inference, and examples.

## 10. Sources and Attribution

The table reproduces the open-surgery and PCNL groups in Charig et al. (1986), Table II, p. 880; that study included 1,052 patients across four treatment groups. Its methods describe consecutive treatment series over different periods, and the size profiles differed across procedures. The rates therefore describe observed groups; they do not alone establish causal treatment effects. The study’s table and methods were read in the full BMJ paper. Bonovas and Piovani’s Table 1 and accompanying discussion were also read. Sprenger and Weinberger’s SEP §§1–3 and relevant applications sections were consulted for the general statistical and causal framework. The percentages were recomputed here.

Research check: 2026-11-01. This is an original educational explanation, not medical advice or a substitute for the cited research. The source review does not establish treatment recommendations or expert review. Additional comparisons are teaching prompts, not established historical variations.

[Return to collection](../../README.md)
