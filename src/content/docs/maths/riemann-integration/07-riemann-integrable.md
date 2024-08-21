---
title: Riemann Integrable
slug: maths/riemann-integration/riemann-integrable
sidebar:
  order: 7
---

A bounded function $f:[a,b]\rightarrow\mathbb{R}$ is Riemann integrable on
$[a,b]$ **iff** $U(f)=L(f)$. In that case, the Riemann integral of $f$ on
$[a,b]$ is denoted by $\int_{a}^{b}{f(x)\,\text{d}x}$.

## Reimann Integrable or not

| Function                            | Yes or No? | Proof hint                                                               |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------ |
| Unbounded                           | No         | By definition                                                            |
| Constant                            | Yes        | $\forall P\,\text{(any partition)}\;\; L(f;P)=U(f;P)$                    |
| Monotonically increasing/decreasing | Yes        | Take a partition such that $\Delta{x}<\delta=\frac{\epsilon}{f(b)-f(a)}$ |
| Continuous                          | Yes        | Take a partition such that $\Delta{x}<\delta=\frac{\epsilon}{2(b-a)}$    |

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
