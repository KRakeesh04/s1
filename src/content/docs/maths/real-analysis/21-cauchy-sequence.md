---
title: Cauchy Sequence
slug: maths/real-analysis/cauchy-sequence
sidebar:
  order: 21
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

## Complete

A set $A$ is complete **iff**: $ $

```math
\forall u:\mathbb{Z}^+ \rightarrow A;\; u\;\text{converges to}\; L \in A
```

### Q is not complete

$Q$ is **not** complete because: $ $

```math
\sum_{k=1}^\infty \frac{1}{k!} = e - 1 \not\in \mathbb{Q}
```

### R is complete

$\mathbb{R}$ is complete. $ $

:::note[Proof Hint]

Proof is quite hard.

:::

## Bounded

All Cauchy sequences are bounded. (has an upper bound).

:::note[Proof Hint]

- Consider the Cauchy definition
- Take $n \gt m = N + 1 \gt N$

:::
