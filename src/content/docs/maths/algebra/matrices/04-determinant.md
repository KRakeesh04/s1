---
title: Determinant
slug: maths/algebra/matrices/determinant
sidebar:
  order: 4
---

Defined only for square matrices. Denoted by $\lvert A\rvert$. $ $

### For 2x2

```math
\lvert A\rvert=
\Bigg\lvert{
\,
\begin{matrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{matrix}
\,
}
\Bigg\rvert
=
a_{11}a_{22} - a_{12}a_{21}
```

### For higher order

#### Minor of an element

Suppose $A=(a_{ij})$. $ $

Minor of an element $a_{ij}$, is the matrix obtained by deleting $i^{\text{th}}$
row and $j^{\text{th}}$ column of $A$. Denoted by $M_{ij}$.

#### Co-factor of an element

Suppose $A=(a_{ij})$. $ $

Co-factor of an element $a_{ij}$, is defined as (commonly denoted as $A_{ij}$):

```math
A_{ij} = (−1)^{i+j}\,\lvert M_{ij}\rvert
```

#### Definition

If $A = (a_{ij})_{n\times n}$ then the **determinant** of $A$ is denoted by
$\lvert A\rvert$ and is defined by:

```math
\lvert A\rvert=
\sum_{j=1}^{n}{a_{ij}A_{ij}}
```

where $1\le j\le n$. $ $
