---
title: Differentiability
slug: maths/complex-numbers/differentiability
sidebar:
  order: 5
---

A complex function $f$ is differentiable at $z_0$ **iff**:

```math
\lim_\limits{z\to z_0}{\frac{f(z)-f(z_0)}{z-z_0}} = L = f'(z_0)
```

$f'(z_0)$ is called the derivative of $f$ at $z_0$. The rules for
differentiation in real functions can also be applied to complex functions. So,
go through
[Differentiability -- Real Analysis](/maths/real-analysis/differentiability/).

## Singular point

If $f(z)$ is not differentiable at $z_0$ then $z_0$ is called a singular point
of $f(z)$.

## Neighbourhood

Suppose $z_0 \in \mathbb{C}$. A neighborhood of $z_0$ is the region contained in
the circle $|z − z_0| = r \gt 0$.

## Analytic

A function $f$ is said to be analytic at $z_0$ **iff** it is differentiable
throughout a neighbourhood of $z_0$.

### Analytic implies differentiable

```math
f \text{ is analytic at } z_0 \implies f \text{ is differentiable at } z_0
```
