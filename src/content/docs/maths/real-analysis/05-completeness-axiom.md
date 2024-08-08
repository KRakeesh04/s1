---
title: Completeness Axiom
slug: maths/real-analysis/completeness-axiom
sidebar:
  order: 5
---

Let $A$ be a non empty subset of $\mathbb{R}$.

- $u$ is the upper bound of $A$ if: $\forall a\in A;a\le u$
- $A$ is bounded above if $A$ has an upper bound
- Maximum element of $A$: $\max{A} = u$ if $u\in A$ and $u$ is an upper bound of
  $A$
- Supremum of $A$ $\sup{A}$, is the smallest upper bound of $A$
- Maximum is a supremum. Supremum is not necessarily a maximum.
- $l$ is the lower bound of $A$ if: $\forall a\in A;a\ge l$
- $A$ is bounded below if $A$ has a lower bound
- Minimum element of $A$: $\min{A} = l$ if $l\in A$ and $l$ is a lower bound of
  $A$
- Infimum of $A$ $\inf{A}$, is the largest lower bound of $A$
- Minimum is a infimum. Infimum is not necessarily a minimum.

## Required proofs

- $sup(a,b)=b$
- $inf(a,b)=a$

## Completeness axioms of $\mathbb{R}$

- Every non empty subset of $\mathbb{R}$ which is bounded above has a supremum
  in $\mathbb{R}$
- Every non empty subset of $\mathbb{R}$ which is bounded below has a infimum in
  $\mathbb{R}$

:::note

$\mathbb{Q}$ doesn't have the completeness property. $ $

:::

## Completeness axioms of $\mathbb{Z}$

- Every non empty subset of $\mathbb{Z}$ which is bounded above has a maximum
- Every non empty subset of $\mathbb{Z}$ which is bounded below has a minimum

:::note[Important theorems]

```math
\exists a\;\forall\epsilon>0,a<\epsilon\implies a\le 0
```

```math
\forall\epsilon>0\;\exists a,a<\epsilon\centernot\implies a\le 0
```

:::
