---
title: Cauchy Sequence
slug: maths/real-analysis/cauchy-sequence
sidebar:
  order: 23
---

A sequence $u:\mathbb{Z}^+ \rightarrow A$ is Cauchy **iff**: $ $

```math
\forall \epsilon \gt 0\,
\exists N \in \mathbb{Z}^+\,
\forall m,n;
m,n \gt N
\implies
\lvert
u_n - u_m
\rvert \lt \epsilon
```

## Bounded

All Cauchy sequences are bounded. (has an upper bound).

:::note[Proof Hint]

- Consider the Cauchy definition
- Take $n \gt m = N + 1 \gt N$

:::

## Convergence & Cauchy

A sequence is converging **iff** it is Cauchy.

:::note[Proof Hint]

To prove $implies$: $ $

- Consider the limit definition of converging sequences
- Introduce the converging value (say $L$) into the inequality and split into 2
  parts

To prove $impliedby$: $ $

- Consider the definition of Cauchy sequences
- Show that the sequence is bounded

:::

## Complete

A set $A$ is complete **iff**: $ $

```math
\forall u:\mathbb{Z}^+ \rightarrow A;\; u\;\text{converges to}\; L \in A
```

<b>IMPORTANT</b>: $Q$ is **not** complete because: $ $

```math
\sum_{k=1}^\infty \frac{1}{k!} = e - 1 \not\in \mathbb{Q}
```

IMPORTANT: $\mathbb{R}$ is complete. $ $

:::note[Proof Hint]

Proof is quite hard.

:::
