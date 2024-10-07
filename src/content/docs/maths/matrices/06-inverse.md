---
title: Inverse
slug: maths/matrices/inverse
sidebar:
  order: 6
---

Suppose $A$ and $B$ are square matrices of the same order. If $AB = BA = I$ then
$B$ is called the inverse of $A$ and is denoted by $A^{−1}$.

```math
A^{-1}=\frac{\text{adj}\,A}{\lvert{A}\rvert}

```

## Singular or Non-singular

A square matrix is singular **iff** $\lvert{A}\rvert=0$. Otherwise its
non-singular or invertible. $ $

## Properties of Inverse

- $(AB)^{-1}=B^{-1}A^{-1}$
- $(A^T)^{-1}=(A^{-1})^{T}$
- $A\,(\text{adj}A) = (\text{adj}A)\,A = \lvert{A}\rvert I$