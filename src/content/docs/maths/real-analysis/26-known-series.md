---
title: Known Series
slug: maths/real-analysis/known-series
sidebar:
  order: 26
---

These series are helpful when using the direct comparison test or limit
comparison test.

## p-series

Not to be confused with [power series](/maths/real-analysis/power-series).

```math
\sum_{k=1}^\infty \frac{1}{k^s}
```

Converges **iff** $s \gt 1$. $ $

This series occurs in the definition of
[Riemann zeta function](/maths/real-analysis/riemann-zeta-function).

:::note

When $s=2$, the series converges to $\frac{\pi}{6}$.

:::

## Geometric series

```math
\sum_{k=1}^\infty r^k
```

Converges **iff** $\lvert r \rvert \lt 1$. In that case, it converges to
$\frac{1}{1-r}$.

## Alternating harmonic series

```math
\sum_{k=1}^\infty \frac{(-1)^{k-1}}{k} = \ln 2
```

The above series is conditionally converging.
