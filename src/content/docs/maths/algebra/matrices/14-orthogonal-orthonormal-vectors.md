---
title: Orthogonal & Orthonormal Vectors
slug: maths/algebra/matrices/orthogonal-orthonormal-vectors
sidebar:
  order: 14
---

Consider 2 column matrices $v_1$ and $v_2$:

```math
v_1=
\begin{pmatrix}
a_1 \\
\vdots \\
a_n
\end{pmatrix}
\;
\land
\;
v_2=
\begin{pmatrix}
b_1 \\
\vdots \\
b_n
\end{pmatrix}
```

## Product

The product of $v_1$ and $v_2$ is defined as:

```math
v_1\cdot v_2=\sum_{k=1}^n{a_kb_k}=v_2\cdot v_1 = v_1^{T}v_2
```

## Orthogonal

### Orthogonal matrix

For a square matrix $A$ with real entries, it is orthogonal **iff**
$A^{-1}=A^{T}$

### Orthogonal vectors

$v_1$ and $v_2$ are orthogonal **iff** $v_1\cdot v_2 = 0$.

For a set of $n$ column vectors, they are orthogonal **iff** they are pairwise
orthogonal. That is: $ $

```math
\forall i,j \in \set{1,\dots,n} \land i \neq j, (v_i\cdot v_j = 0)
```

:::note

$v_1, v_2$ are orthogonal $\implies v_1, v_2$ are linearly independent.

Converse is **not** true.

:::

## Orthonormal

For a set of $n$ column vectors, they are orthonormal **iff**: $ $

- They are pairwise orthogonal **AND**
- For all $n$ column vectors their norm is $1$  
  $\forall i \in \set{1,\dots,n}, ||v_i||=1$

## Properties of orthogonal matrices

- Product of 2 orthogonal matrices of the same order is also an orthogonal
  matrix
- The columns or rows of an orthogonal matrix form an orthogonal set of vectors
