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

An unbounded function is not Riemann integrable.
