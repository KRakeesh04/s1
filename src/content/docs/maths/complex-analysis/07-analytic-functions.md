---
title: Analytic Functions
slug: maths/complex-analysis/analytic-functions
sidebar:
  order: 7
---

A function $f$ is said to be analytic at $z_0$ **iff** it is differentiable
throughout a neighbourhood of $z_0$. Aka. regular functions, holomorphic
functions and monogenic functions.

### Examples

- Polynomial functions of $z$ (analytic everywhere)
- Functions with a converging Taylor series for all $z$ (analytic everywhere)
  - $\sin z$
  - $\cos z$
  - $e^z$

### Non-examples

| Function             | Note                                                                                   |
| -------------------- | -------------------------------------------------------------------------------------- |
| $\lvert z \rvert ^2$ | Differentiable only at $z=0$.                                                          |
| $\overline{z}$       | Nowhere differentiable. Derivative taken on the real and imaginary axes are different. |
| $\text{Re}(z)$       | Nowhere differentiable. Derivative taken on the real and imaginary axes are different. |
| $z+overline{z}$      | Nowhere differentiable. Similar to above.                                              |
| $\text{Im}(z)$       | Nowhere differentiable. Derivative taken on the real and imaginary axes are different. |
| $z-overline{z}$      | Nowhere differentiable. Similar to above.                                              |

## Analytic implies differentiable

```math
f \text{ is analytic at } z_0 \implies f \text{ is differentiable at } z_0
```
