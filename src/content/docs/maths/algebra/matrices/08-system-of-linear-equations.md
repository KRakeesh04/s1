---
title: System of Linear Equations
slug: maths/algebra/matrices/system-of-linear-equations
sidebar:
  order: 8
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

- $=0$: Homogeneous
- $\neq0$: Non-homogeneous

## Solution of non-homogenous systems

### Method 1: Direct approach

Used when coefficient matrix $A$ is invertible. It means the system has a unique
set of solutions. $ $

```math
AX=B
\implies
X=A^{-1}B
```

### Method 2: Cramer's Rule

TODO

### Method 1: Reducing to Echelon Form

TODO

#### Echelon Form

A matrix is in echelon form **iff**:

- Any row consisting entirely of zeroes occurs at the bottom of the matrix
- For each row that does not contain entirely zeros, the first non-zero entry
  is 1.
- For 2 successive non-zero rows, the leading 1 in the higher row is further
  left than the leading 1 in the lower row.

## Solution of homogenous systems

TODO
