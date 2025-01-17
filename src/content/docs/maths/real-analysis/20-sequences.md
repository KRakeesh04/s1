---
title: Sequences
slug: maths/real-analysis/sequences
sidebar:
  order: 20
---

A sequence on a set $A$ is a function $u:\mathbb{Z}^{+}\rightarrow A$.

Image of the n is written as $u_n$. A sequence is indicated by one of these
ways: $ $

```math
\Big\{u_n\Big\}_{n=1}^{\infty}
\;\;
\text{or}
\;\;
\Big\{u_n\Big\}
\;\;
\text{or}
\;\;
\Big(u_n\Big)_{n=1}^{\infty}
```

### Increasing or Decreasing

A sequence $\big(u_n\big)$ is $ $

- Increasing **iff** $u_n\ge u_m$ for $n>m$
- Decreasing **iff** $u_n\le u_m$ for $n>m$
- Monotone **iff** either increasing or decreasing
- Strictly increasing **iff** $u_n\gt u_m$ for $n>m$
- Strictly decreasing **iff** $u_n\lt u_m$ for $n>m$

### Subsequence

Suppose $u:\mathbb{Z}^+\rightarrow \mathbb{R}$ be a sequence and
$v:\mathbb{Z}^+\rightarrow\mathbb{Z}^+$ be an increasing sequence. Then
$u\circ v: \mathbb{Z}^+\rightarrow \mathbb{R}$ is a subsequence of $u$.

## Convergence

### Converging

A sequence $\big(u_n\big)_{n=1}^{\infty}$ is converging (to $L\in\mathbb{R}$)
**iff**: $\lim_\limits{n\to \infty}{u_n} = L$

```math
\forall \epsilon > 0\;
\exists N\in\mathbb{Z}^{+}
\;
\forall n
\;
(
n > N
\implies
|u_n-L| < \epsilon
)
```

:::note

```math
\forall x\in\mathbb{R}\;\;
\lim_\limits{n\to\infty}\frac{x^n}{n!}=0
```

:::

### Diverging

A sequence is diverging **iff** it is not converging.

```math
\lim_\limits{n\to\infty}u_n=
\begin{cases}
\;\infty\\
\;-\infty\\
\;\text{undefined}, & \text{when}\;u_n\;\text{is osciallating}\\
\end{cases}
```

## Convergence test

All converging sequences are bounded.

### Increasing and bounded above

Let $\big(u_n\big)$ be increasing and bounded above. Then $\big(u_n\big)$ is
converging (to $\sup\,\set{u_n}$).

:::note[Proof Hint]

- $\set{u_n}$ has a $\sup u_n (= s)$
- Prove: $\lim_\limits{n\to\infty}u_n=s^{-}$

:::

### Decreasing and bounded below

Let $\big(u_n\big)$ be decreasing and bounded below. Then $\big(u_n\big)$ is
converging (to $\inf\,\set{u_n}$).

:::note[Proof Hint]

- $\set{u_n}$ has a $\inf u_n (= l)$
- Prove: $\lim_\limits{n\to\infty}u_n=l^{+}$

:::

## Newton's method of finding roots

Suppose $f$ is a function. To find its roots: $ $

- Select a point $x_0$
- Draw a tangent at $x_0$
- Choose $x_1$ which is where the tangent meets $y=0$
- Continue this process repeatedly

```math
x_{n+1}=x_n - \frac{f(x_n)}{f'(x_n)}
```

## Theorems

### Existence of subsequence

Every sequence has a monotone subsequence.

### Bolzano-Weistrass

Every bounded sequence has a converging sequence.

:::note[Proof Hint]

Using the above theorem and the fact that bounded monotone sequences converge.

:::
