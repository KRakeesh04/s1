---
title: Subsequence
slug: maths/real-analysis/subsequence
sidebar:
  order: 22
---

Suppose $u:\mathbb{Z}^+\rightarrow \mathbb{R}$ be a sequence and
$v:\mathbb{Z}^+\rightarrow\mathbb{Z}^+$ be an increasing sequence. Then
$u\circ v: \mathbb{Z}^+\rightarrow \mathbb{R}$ is a subsequence of $u$.

## Existence of subsequence

Every sequence has a monotonic subsequence.

:::note[Proof Hint]

- Let $n\in\mathbb{Z}^+$ be called "good" **iff** $\forall m>n,\,u_n > u_m$.
- Suppose $u_n$ has infinitely many "good" points. That implies $u_n$ has a
  decreasing subsequence.
- Suppose $u_n$ has finitely many "good" points. Let $N$ is the maximum of
  those. $\forall n_1 > N,\,n_1\;\text{is not "good"}$ That implies $u_n$ has a
  increasing subsequence.

:::

## Bolzano-Weierstrass

Every bounded sequence on $\mathbb{R}$ has a converging subsequence. $ $

:::note[Proof Hint]

From the above theorem, there is a monotonic subsequence $u_{n_k}$ which is also
bounded. Bounded monotone sequences converge. $ $

:::

:::note

For a set $A$, all $3$ statements are equivalent:

- $A$ has the [completeness property](/maths/real-analysis/completeness-axiom/)
- $A$ is [complete](/maths/real-analysis/cauchy-sequence/#complete)
- [Bolzano-Weierstrass theorem](/maths/real-analysis/22-subsequence/#bolzano-weierstrass)
  on $A$

:::

## Theorem 1

Suppose $u_n$ is a sequence converging to $L$, and $u_{n_k}$ is a subsequence of
$u_n$. Then $u_{n_k}$ is converging to $L$.

```math
\lim_\limits{n \to \infty} u_k = L
\implies
\lim_\limits{n_k \to \infty} u_{n_k} = L
```

:::note[Proof Hint]

Note that $n_k \ge k$. $ $

:::

## Theorem 2

Suppose $u_n$ is a sequence diverging to $\infty$, and $u_{n_k}$ is a
subsequence of $u_n$. Then $u_{n_k}$ is diverging to $\infty$.

```math
\lim_\limits{n \to \infty} u_k = \infty
\implies
\lim_\limits{n_k \to \infty} u_{n_k} = \infty
```

:::note[Proof Hint]

Note that $n_k \ge k$. $ $

:::

## Subsequence of a cauchy sequence

If $u_n$ is Cauchy and $u_{n_k}$ is a subsequence converging to $L$, then $u_n$
converges to $L$.
