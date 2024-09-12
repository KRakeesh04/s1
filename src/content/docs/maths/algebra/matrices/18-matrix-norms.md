---
title: Matrix Norms
slug: maths/algebra/matrices/matrix-norms
sidebar:
  order: 18
---

Let $A_{n\times n}$. A norm of $A$ is denoted by $||A||$.

## Definitions

### 1-norm

Maximum of the absolute column sums. For a matrix $A=(a_{ij})_{m\times n}$: $ $

```math
||A||_1 =
\max
\bigg\{
    \sum_{i=1}^{m}
    {|a_ij|}
    \;;\;
    j \in [1,n]
\bigg\}
```

### 2-norm

Square root of the sum of all elements squared. Also called as Euclidean norm.
For a matrix $A=(a_{ij})_{m\times n}$: $ $

```math
\Big(||A||_2\Big)^2=
\Big(||A||_E\Big)^2=
    \sum_{i=1}^{m}
    \sum_{j=1}^{n}
    {(a_{ij})^2}
```

### Infinity norm

Maximum of the row sums. For a matrix $A=(a_{ij})_{m\times n}$: $ $

```math
||A||_\infty =
\max
\bigg\{
    \sum_{j=1}^{n}
    {|a_ij|}
    \;;\;
    i \in [1,m]
\bigg\}
```

### Vector norm

Norm defined for column vectors.

## Properties of Norms

Works for all types of norms.

Suppose $A,B$ are of order $m\times n$

1. $||A||\ge 0$
2. $||A|| = 0 \iff A=0$
3. $||kA||=|k|\times ||A||$
4. $||A + B|| \le |||A|| + ||B||$ (triangle inequality)
5. $||AB|| \le ||A|| ||B||$
