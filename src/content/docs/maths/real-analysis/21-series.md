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

:::caution[Proof Hint]

I don't know.

:::

### Integral Test

Let $u(x) \gt 0$, decreasing and integrable on $[1,M]$ for all $M \gt 1$. Then:

```math
\sum_{n=1}^\infty u_n\text{ is converging}
\iff
\int_1^\infty {u(x)\,\text{d}x}\text{ is converging}
```

:::caution[Proof Hint]

I don't know yet.

:::

### Ratio Test

Let $u(x) \gt 0$ and $\lim_\limits{n\to \infty}{\frac{u_{n+1}}{u_n}} =L$.

```math
 L \lt 1 \implies \sum_{n=1}^\infty u_n\;\text{is converging}
```

```math
 L \gt 1 \implies \sum_{n=1}^\infty u_n\;\text{is diverging}
```

:::caution[Proof Hint]

I don't know.

:::

### Root Test

Let $u(x) \gt 0$ and $\lim_\limits{n\to \infty}{u_n^{1/n}} =L$.

```math
 L \lt 1 \implies \sum_{n=1}^\infty u_n\;\text{is converging}
```

```math
 L \gt 1 \implies \sum_{n=1}^\infty u_n\;\text{is diverging}
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

:::caution[Proof Hint]

I don't know yet.

:::

## Theorem 2

```math
\sum_{k=1}^{n}{\lvert u_k \rvert}\text{ is converging}
\implies
\sum_{k=1}^{n}{u_k}\text{ is converging}
```

:::note[Proof Hint]

```math
0 \le
\;\lvert u_k \rvert - u_k\; \le
2 \lvert u_k \rvert
```

:::
