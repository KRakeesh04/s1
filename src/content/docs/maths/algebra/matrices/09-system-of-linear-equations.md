---
title: System of Linear Equations
slug: maths/algebra/matrices/system-of-linear-equations
sidebar:
  order: 9
---

Any system of linear equations can be represented in matrix notation as shown
below.

- $a_{11}x+a_{12}y+a_{13}z=b_1$
- $a_{21}x+a_{22}y+a_{23}z=b_2$
- $a_{31}x+a_{32}y+a_{33}z=b_3$

```math
\Bigg(
\,
\begin{matrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{matrix}
\,
\Bigg)
\Bigg(
\begin{matrix}
x \\
y \\
z \\
\end{matrix}
\Bigg)
=
\Bigg(
\begin{matrix}
b_{1} \\
b_{2} \\
b_{3} \\
\end{matrix}
\Bigg)
\implies
AX=B
```

2 types based on $B$: $ $

- $=0$: [Homogeneous system](/maths/algebra/matrices/homogenous-systems/)
- $\neq0$:
  [Non-homogeneous system](/maths/algebra/matrices/non-homogenous-systems/)

## Consistent

When the system of equations has at least 1 solution. Otherwise inconsistent.
