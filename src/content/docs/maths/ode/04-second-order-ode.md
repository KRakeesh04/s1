---
title: Solving Second Order Ordinary Differential Equations
sidebar:
  label: Solving Second Order ODE
  order: 4
slug: maths/ode/second-order-ode
---

## Homogenous

```math
\frac{\text{d}^2y}{\text{d}x^2}+
a\frac{\text{d}y}{\text{d}x}+
+by
=0\,;\;a,b\,\text{are constants}
```

Consider the function $y=e^{mx}$. Here $m$ is a constant to be found.

By applying the function to the above equation, we get:

```math
m^2 + am + b = 0
```

The above equation is called the **Auxiliary equation** or **Characteristic
equation**.

### Case 1: Distinct real roots

```math
y = Ae^{m_1x}+Be^{m_2x}
```

### Case 2: Equal real roots

```math
y = (Ax+B)e^{mx}
```

### Case 3: Complex conjugate roots

```math
y = Ae^{(p+iq)x} + Be^{(p−iq)x} = e^{px}\big(C\cos{(qx)}+D\sin{(qx)}\big)
```

## Non-homogenous

```math
\frac{\text{d}^2y}{\text{d}x^2}+
a\frac{\text{d}y}{\text{d}x}+
+by
=q(x)\,;\;a,b\,\text{are constants}
```

### Method of undetermined coefficients

We find $y_p$ by guessing and substitution which depends on the nature of
$q(x)$.

If $q(x)$ is:$ $

- a constant, $y_p$ is a constant
- $kx$, $y_p=ax+b$
- $kx^2$, $y_p=ax^2+bx+c$
- $k\sin{x}$ or $k\cos{x}$, $y_p=a\sin{x}+b\cos{x}$
- $e^{kx}$, $y_p=ce^{kx}$ (Only works if $k$ is **not** a root of auxiliary
  equation)

### Steps

- Solve for $y_c$
- Based on the form of $q(x)$ , make an initial guess for $y_p$.
- Check if any term in the guess for $y_p$ is a solution to the complementary
  equation.
- If so, multiply the guess by $x$. Repeat this step until there are no terms in
  $y_p$ that solve the complementary equation.
- Substitute $y_p$ into the differential equation and equate like terms to find
  values for the unknown coefficients in $y_p$.
- If coefficients were unable to be found (they cancelled out or something like
  that), multiply the guess by $x$ and start again.
- $y=y_p+y_c$
