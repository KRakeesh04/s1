---
title: Higher Order Ordinary Differential Equations
sidebar:
  label: Higher Order ODE
  order: 3
slug: maths/ode/higher-order-ode
---

## Linear Differential Equations

```math
\frac{\text{d}^ny}{\text{d}x^n}+
p_1(x)\frac{\text{d}^{n-1}y}{\text{d}x^{n-1}}+
\;...\;
+p_n(x)y
=q(x)
```

Based on $q(x)$, the above equation is categorized into 2 types$ $

- **Homogenous** if $q(x)=0$
- **Non-homogenous** if $q(x)\not=0$

:::note

For 1st semester, only higher order, linear, ordinary differential equations
with constant coefficients are focused on. They can be written as:

```math
\frac{\text{d}^ny}{\text{d}x^n}+
a_1\frac{\text{d}^{n-1}y}{\text{d}x^{n-1}}+
\;...\;
+a_ny
=q(x)
```

:::

## Solution

The general solution of the equation is $y=y_p+y_c$. $ $

Here

- $y_p$ - **particular solution**
- $y_c$ - **complementary solution**

### Particular solution

Doesn't exist for homogenous equations.

#### For non-homogenous equations

// TODO

### Complementary solution

Solutions assuming $LHS=0$ (as in a homogenous equations). $ $

```math
y_c = \sum_{i=1}^{n}{c_iy_i}
```

Here

- $c_i$ - constant coefficients
- $y_i$ - a linearly-independent solution

:::note

n-th order linear differential equations have n linearly-independent solutions.

**linearly-independent** means $ \sum\_{i=1}^{n}{c_iy_i} = 0 \rightarrow
\forall{c_i}=0$. $ $ :::

## Linear differential operators with constant coefficients

### Differential operator

Defined as:

```math
\text{D}^i=\frac{\text{d}^i}{\text{d}x^i}\;;\;n\in\mathbb{Z}^+
```

We can write the above equation using the differential operator:

```math
\text{D}^ny+
a_1\text{D}^{n-1}y+
\;...\;
+a_ny
=q(x)
```

Here if we factor out $y$ (_**how tf?**_), we get:$ $

```math
(\text{D}^n+
a_1\text{D}^{n-1}+
\;...\;
+a_n
)y
=
P(D)y
=
q(x)
```

where $P(D)=(\text{D}^n+a_1\text{D}^{n-1}+\;...\;+a_n)$. $ $

We call $P(D)$ a polynomial differential operator with constant coefficients.$ $
