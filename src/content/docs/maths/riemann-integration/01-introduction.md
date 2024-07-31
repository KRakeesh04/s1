---
title: Introduction to Riemann Integration
sidebar:
  label: Introduction
  order: 1
slug: maths/riemann-integration/introduction
---

## Interval

Let $I=[a,b]$. Length of the interval $\lvert{I}\rvert=b-a$.

## Disjoint interval

When 2 intervals don't share any common numbers.

## Almost disjoint interval

When 2 intervals are disjoint or intersect only at a common endpoint.

## Riemann integral

Let $f\,-\,[a,b]\rightarrow\mathbb{R}$ is a bounded (not necessarily continuous)
function on a closed, bounded (compact) interval. $ $

Riemann integral of $f$ is: $\int_{a}^{b}{f}$

### Definite integral

When $a,b$ are constants. $ $

### Indefinite integral

When $a$ is a constant but $b$ is replaced with $x$.

## Partition

Let $I$ be a non-empty, compact interval (closed and bounded). A partition of
$I$ is a finite collection $\set{I_1, I_2, \dots, I_n}$ of almost disjoint,
non-empty, compact sub-intervals whose union is $I$.

A partition is determined by the endpoints of all sub-intervals:
$a=x_0<x_1<\dots<x_n=b$. $ $

A partition can be denoted by:

- its intervals - $P=\set{I_1, I_2, \dots, I_n}$
- the endpoints of its intervals - $P=\set{x_0,x_1, \dots, x_n}$

:::note[Telescoping series]

TODO

:::

## Riemann sum

Let

- $f\,:\,[a,b]\rightarrow\mathbb{R}$ is a bounded function on the compact
  interval $I=[a,b]$ with $M=\sup_I f$ and $m=\inf_I f$.
- $P=\set{I_1, I_2, \dots, I_n}$
- $M_k=\sup_{I_k} f = \sup\set{f(x):x\in[x_{k-1},x_k]}$
- $m_k=\inf_{I_k} f = \inf\set{f(x):x\in[x_{k-1},x_k]}$

### Upper riemann sum

```math
U(f;P)=\sum_{k=1}^{n}{M_k\lvert{I_k}\rvert}
```

### Lower riemann sum

```math
L(f;P)=\sum_{k=1}^{n}{m_k\lvert{I_k}\rvert}
```

$m_k<M_k \implies L(f;P)\,\le\,U(f;P)$ $ $

When $P_1, P_2$ are any 2 partitions of $I$: $ L(f;P_1) \le U(f;P_2) $

## Refinements

$Q$ is called a refinement of $P \iff $ if $P$ and $Q$ are partitions of $[a,b]$
and $P\subseteq Q$.

:::note

If $P_1$ and $P_2$ are partitions of $[a,b]$, then $Q=P_1\cup P_2$ is a
refinement of both $P_1$ and $P_2$.

:::

When $Q$ is a refinement of $P$:

```math
L(f;P)
\le
L(f;Q)
\le
U(f;Q)
\le
U(f;P)
```
