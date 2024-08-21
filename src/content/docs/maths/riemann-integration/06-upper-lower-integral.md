---
title: Upper & Lower integral
slug: maths/riemann-integration/upper-lower-integral
sidebar:
  order: 6
---

Let $\mathbb{P}$ be the collection of all possible partitions of the interval
$[a, b]$.

## Upper Integral

```math
U(f)=\inf{\set{U(f;P);P\in\mathbb{P}}}=\overline{\int_{a}^{b}{f}}
```

## Lower Integral

```math
L(f)=\sup{\set{L(f;P);P\in\mathbb{P}}}=\underline{\int_{a}^{b}{f}}
```

For a bounded function $f$, always $L(f)\le U(f)$

## Riemann Integrable

A bounded function $f:[a,b]\rightarrow\mathbb{R}$ is Riemann integrable on
$[a,b]$ **iff** $U(f)=L(f)$. In that case, the Riemann integral of $f$ on
$[a,b]$ is denoted by $\int_{a}^{b}{f(x)\,\text{d}x}$.

### Reimann Integrable or not

| Function                            | Yes or No? | Proof hint                                                               |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------ |
| Unbounded                           | No         | By definition                                                            |
| Constant                            | Yes        | $\forall P\,\text{(any partition)}\;\; L(f;P)=U(f;P)$                    |
| Monotonically increasing/decreasing | Yes        | Take a partition such that $\Delta{x}<\delta=\frac{\epsilon}{f(b)-f(a)}$ |
| Continuous                          | Yes        | Take a partition such that $\Delta{x}<\delta=\frac{\epsilon}{b-a}$       |

:::note

If the set of points of discontinuity of a bounded function
$f:[a, b] \rightarrow \mathbb{R}$ is finite, then $f$ is Riemann integrable on
$[a, b]$.

:::

:::note

If the set of points of discontinuity of a bounded function
$f:[a, b] \rightarrow \mathbb{R}$ is finite number of limit points, then $f$ is
integrable on $[a, b]$.

A function may have infinitely many discontinuous points, but if the set of all
discontinuous points have finite number of limit points, then $f$ is integrable
on $[a, b]$.

:::
