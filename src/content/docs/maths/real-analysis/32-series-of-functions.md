---
title: Series of Functions
slug: maths/real-analysis/series-of-functions
sidebar:
  order: 32
---

Let $u_k(x)$ is a sequence of integrable functions. And series of those
functions is defined as:

```math
s_n(x) = \sum_{k=1}^n u_k(x)
```

## Convergence

$s_n(x)$ converges to $s(x)$ uniformly.

:::caution[TODO]

Include the Proof Hint.

:::

## Convergence tests

### Weierstrass M-test

To test if a series of functions converges uniformly and absolutely.

Let $f_n$ be a sequence functions on a set $A$. And both these conditions are
met:

- $\forall n \ge 1\;\exists M_n \ge 0\; \forall x \in A\;; \lvert f_n(x) \rvert \le M_n$
- $\sum_{n=1}^\infty M_n$ converges

Then:

```math
\sum_{n=1}^\infty f_n(x)\; \text{converges uniformly \& absolutely}
```
