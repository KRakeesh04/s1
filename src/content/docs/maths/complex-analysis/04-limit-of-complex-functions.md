---
title: Limit of Complex Functions
slug: maths/complex-analysis/limit-of-complex-functions
sidebar:
  order: 4
---

$\lim_\limits{z\to z_0} f(z) = L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{z}\;
(0<|z-z_0|<\delta\implies{|f(z)-L|<\epsilon})
```

Complex limit properties are similar to real limits.

## Difference from real functions

For real functions, when considering the limit at a point, we could approach the
point either from the left or from the right.

For complex functions, the point can be approached along any path in the complex
plane. The distance $\lvert z − z_0 \rvert$ decreases to $0$.

## Real and imaginary limits

Suppose $f(z)=u(x,y)+iv(x,y)$, $\lim_\limits{(x,y)\to(x_0,y_0)} u(x,y)=L_1$ and
$\lim_\limits{(x,y)\to(x_0,y_0)} v(x,y)=L_2$, where $z_0 = x_0 + iy_0$ and
$z=x+iy$. Then $\lim_\limits{z\to z_0} f(z)=L_1+iL_2$.
