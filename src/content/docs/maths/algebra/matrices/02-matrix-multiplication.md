---
title: Matrix Multiplication
slug: maths/algebra/matrices/matrix-multiplication
sidebar:
  order: 2
---

Defined only when the number of columns of the first matrix is equal to the
number of rows of the second matrix.

Suppose $A=(a_{ij})_{m\times{p}}$ and $B=(b_{ij})_{p\times{n}}$.

```math
A\times{B}=C
=(c_{ij})_{m\times{n}}
\;\;\text{where}
\;\;
c_{ij} =
\sum_{k=1}^{p}{a_{ik}\times b_{kj}}
```

:::note

- Generally $A\times{B}\not=B\times{A}$
- $A\times{B}=0 \centernot\implies A=0 \lor B=0$
- $A\not=0 \land B\not=0 \centernot\implies A\times{B}\not=0$

:::

## Properties of matrix multiplication

$A,B,C,I\;(\text{Identity})$ matrices must be chosen so that below-mentioned
product matrices are defined. $ $

1. Associative: $A(BC) = (AB)C$
2. Right distributive over addition: $(A+B)C=AC+BC$
3. Left distributive over addition: $C(A+B)=CA+CB$
4. $AI=IA=A$
