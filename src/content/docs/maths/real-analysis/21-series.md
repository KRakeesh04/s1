---
title: Series
slug: maths/real-analysis/series
sidebar:
  order: 21
---

Let $(u_n)$ be a sequence, and a series (a new sequence) can be defined from it
such that: $ $

```math
s_n=\sum_{k=1}^{n}{u_k}
```

## Convergence

If $(s_n)$ is converging: $ $

```math
\lim_\limits{n\to \infty}{s_n} =
\lim_\limits{n\to \infty}{\sum_{k=1}^n {u_k}} =
\sum_{k=1}^\infty u_k = S\in\mathbb{R}
```

### Direct Comparison Test

Let $0<u_k<v_k$ and $\sum_{k=1}^\infty v_k$ is converging. Then
$s_n=\sum_{k=1}^\infty u_k$ is converging.

:::note[Proof Hint]

- $\sum_{k=1}^n u_k$ and $\sum_{k=1}^n v_k$ are increasing
- $\sum_{k=1}^\infty v_k$ converges to its supremum

:::

:::note[Example]

Example usage of this is proving the convergence of
$\sum_{k=1}^\infty \frac{1}{k!}$, by using $k! \ge 2^{k-1}$ for all $k\ge 0$.

:::

### Limit Comparison Test

Let $0<u_k<v_k$ and $\lim_\limits{n\to \infty}{\frac{u_n}{v_n}} =R$.

```math
R \in (0,\infty)\;\land\; \sum_{n=1}^\infty u_n\;\text{is converging}\iff  \sum_{n=1}^\infty v_n\;\text{is converging}
```

```math
R = 0 \;\land\; \sum_{n=1}^\infty v_n\;\text{is converging} \implies  \sum_{n=1}^\infty u_n\;\text{is converging}
```

```math
R = \infty \;\land\; \sum_{n=1}^\infty v_n\;\text{is diverging} \implies  \sum_{n=1}^\infty u_n\;\text{is diverging}
```
