---
title: Matrix multiplication
slug: maths/algebra/matrices/matrix-multiplication
sidebar:
  order: 3
---

Defined only if the number of columns of the first matrix is equal to the number
of rows of the second matrix.

If $A=(a_{ij})_{m\times{p}}$ and $B=(b_{ij})_{p\times{n}}$, then
$A\times{B}=C=(c_{ij})_{m\times{n}}$ where
$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{ip}b_{pj}$.

:::note

- Generally $A\times{B}\not=B\times{A}$. $ $
- $A\times{B}=0 \centernot\implies A=0 \lor B=0$
- $A\not=0 \land B\not=0 \centernot\implies A\times{B}\not=0$

:::

## Properties of matrix multiplication

$A,B,C,I$ matrices must be chosen so that below-mentioned product matrices are
defined. $ $

1. Associative: $A(BC) = (AB)C$
2. Right distributive over addition: $(A+B)C=AC+BC$
3. Left distributive over addition: $C(A+B)=CA+CA$
4. $AI=IA=A$; $I$ is an identity matrix.
