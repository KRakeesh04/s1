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

## Theorem 1

```math
\sum_{k=1}^{n}{u_k}\text{ is converging}
\implies
\lim_\limits{k\to\infty}{u_k} = 0
```

The converse is more useful:

```math
\lim_\limits{k\to\infty}{u_k} \neq 0
\implies
\sum_{k=1}^{n}{u_k}\text{ is divering}
```

## Theorem 2

```math
\sum_{k=1}^{n}{\lvert u_k \rvert}\text{ is converging}
\implies
\sum_{k=1}^{n}{u_k}\text{ is converging}
```

:::note[Proof Hint]

Use this inequality:

```math
0 \le
\;\lvert u_k \rvert - u_k\; \le
2 \lvert u_k \rvert
```

:::
