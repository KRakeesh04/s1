---
title: Improper Riemann Integrals
slug: maths/riemann-integration/improper-riemann-integrals
sidebar:
  order: 16
---

Iniitally Riemann integrals are defined only for **bounded** functions defined
on a set of **compact** intervals.

### Type 1

A function that is **not** integrable at one endpoint of the interval.

Suppose $f:(a,b]\to\mathbb{R}$ is integrable on $[c,b]\;\forall c\in (a,b)$.

```math
\int_a^b f = \lim_\limits{\epsilon \to 0}\; \int_{a+\epsilon}^b f
```

Can be similarly defined on the other endpoint. The above integral converges
**iff** the limit exists and finite. Otherwise diverges.

#### Examples

```math
\int_0^1 \frac{1}{x^p}\,\text{d}x =
\lim_\limits{\epsilon \to 0^+}
\int_\epsilon^1 \frac{1}{x^p}\,\text{d}x
```

The above integral converges (to $\frac{1}{p-1}$) **iff** $0 \lt p \lt 1$. When
$p\ge 1$, it diverges to $\infty$.

### Type 2

A function defined on unbounded interval (including $\infty$). $ $

Suppose $f:[a,\infty)\to\mathbb{R}$ is integrable on $[a,r] \forall r > a$.

```math
\int_a^\infty f = \lim_\limits{r \to \infty}\; \int_a^r f
```

Can be similarly defined on the other endpoint. The above integral converges
**iff** the limit exists and finite. Otherwise diverges.

#### Examples

```math
\int_1^\infty \frac{1}{x^p}\,\text{d}x =
\lim_\limits{r \to \infty}
\int_1^r \frac{1}{x^p}\,\text{d}x
```

The above integral converges (to $\frac{1}{p-1}$) **iff** $p \gt 1$. When
$0 \lt p \le 1$, it diverges to $\infty$.

### Type 3

A function that is undefined at finite number of points. The integral can be
split into multiple integrals of type 1. Similarly integrals from $-\infty$ to
$\infty$ can be defined.

:::note

The integral can be split into multiple integrals only when all those integrals
exist.

:::

Convergence of improper integrals is similar to the convergence of
[series](/maths/real-analysis/series/).

## Absolute convergence test

```math
\int_a^b \lvert f \rvert\;\text{converges}
\implies
\int_a^b f \;\text{converges}
```
