---
title: Cauchy Riemann Equations
slug: maths/complex-numbers/cauchy-riemann-equations
sidebar:
  order: 6
---

The set of equations mentioned below are the Cauchy Riemann Equations, where
$u,v$ are functions of $x,y$.

```math
\frac{\partial{u}}{\partial{x}}
=u_x
=
\frac{\partial{v}}{\partial{y}}
=v_y
\;\;\;
\land
\;\;\;
\frac{\partial{u}}{\partial{y}}
=u_y
=
-
\frac{\partial{v}}{\partial{x}}
=-v_x
```

## Theorem 1

Suppose $f(z)=u(x,y)+iv(x,y)$, and $f$ is differentiable at $z_0$. Then

- All partial derivatives $u_x,u_y,v_x,v_y$ exist
- They satisfy the Cauchy Riemann equations

```math
f'(z_0)=u_x(x_0,y_0) + iv_x(x_0,y_0)
```

## Theorem 2

Suppose $f(z)=u(x,y)+iv(x,y)$. All partial derivatives exist, and they are all
continuous at $z_0$. Then $f$ is differentiable at $z_0$. And:

```math
f'(z_0)=u_x(x_0,y_0) + iv_x(x_0,y_0)
```
