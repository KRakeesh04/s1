---
title: Completeness Axiom
slug: maths/real-analysis/completeness-axiom
sidebar:
  order: 6
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

## Theorems

Let $A$ be a non empty subset of $\mathbb{R}$.

- Say $u$ is an upper bound of $A$. Then $u= \sup A$ **iff**:  
  $\forall \epsilon \gt 0\;\exists a \in A;\;a + \epsilon \gt u$
- Say $l$ is a lower bound of $A$. Then $l= \inf A$ **iff**:  
  $\forall \epsilon \gt 0\;\exists a \in A;\;a - \epsilon \lt l$

## Required proofs

- $sup(a,b)=b$
- $inf(a,b)=a$

## Completeness axioms of real numbers

- Every non empty subset of $\mathbb{R}$ which is bounded above has a supremum
  in $\mathbb{R}$
- Every non empty subset of $\mathbb{R}$ which is bounded below has a infimum in
  $\mathbb{R}$

:::note

$\mathbb{Q}$ doesn't have the completeness property. $ $

:::

## Completeness axioms of integers

- Every non empty subset of $\mathbb{Z}$ which is bounded above has a maximum
- Every non empty subset of $\mathbb{Z}$ which is bounded below has a minimum

## Two important theorems

- $\exists a\;\forall\epsilon>0,a<\epsilon\implies a\le 0$
- $\forall\epsilon>0\;\exists a,a<\epsilon\centernot\implies a\le 0$
