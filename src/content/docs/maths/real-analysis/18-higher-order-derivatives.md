---
title: Higher Order Derivatives
slug: maths/real-analysis/higher-order-derivatives
sidebar:
  order: 18
---

Suppose $f$ is a function defined on $(a,b)$. $f$ is $n$ times differentiable or
$n$-th differentiable **iff**:

```math
\lim_\limits{x\to a}{\frac{f^{(n-1)}(x)-f^{(n-1)}(a)}{x-a}} = L \in \mathbb{R} = f^{(n)}(a)
```

Here $f^{(n)}$ denotes $n$-th derivative of $f$. And $f^{(0)}$ means the
function itself.

$f^{(n)}(a)$ is the $n$-th derivative of $f$ at $a$.

:::note

$f \text{ is } n \text{-th differentiable at } a \implies f^{(n-1)} \text{ is continuous at } a$

:::
