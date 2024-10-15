---
title: Sequence of Functions
slug: maths/riemann-integration/sequence-of-functions
sidebar:
  order: 14
---

## Types of Convergence

### Uniformly convergence

```math
\forall \epsilon \gt 0\;
\exists N \in \mathbb{Z^+}\;
\forall x\in [a,b]\;
\forall n > N\;;\;
\big|f_n(x)-f(x)\big| \lt \epsilon
```

Here $N$ depends on $\epsilon$ only.

Examples:

- $\frac{x^2}{n}$ on $[0,1]$

### Pointwise convergence

```math
\forall \epsilon \gt 0\;
\forall x\in [a,b]\;
\exists N \in \mathbb{Z^+}\;
\forall n > N\;;\;
\big|f_n(x)-f(x)\big| \lt \epsilon
```

Here $N$ depends on $\epsilon, x$.

Examples:

- $x^n$ on $[0,1]$

## Uniform Convergence Theorem

Let $f_n$ be a sequence of Riemann integrable functions on $[a,b]$. Suppose
$f_n$ converges to $f$ uniformly. Then $f$ is Riemann integrable on $[a,b]$ and:

```math
\lim_\limits{n\to \infty}
\int_a^b f_n(x)\,\text{d}x
=
\int_a^b f(x)\,\text{d}x
```

:::note[Proof Hint]

- Consider $\frac{\epsilon}{2(b-a)}$ in place of $\epsilon$.
- Consider Cauchy criteria for $f_N$.
- Prove $f-f_N$ is Riemann integrable using Cauchy criteria.
- $f$ is Riemann integrable as $f=f_N + (f - f_N)$.

:::

When $f_n$ converges to $f$ pointwise, we cannot be sure if $f$ is Riemann
integrable or not. An example where $f$ is not Riemann integrable:

```math
\lim_\limits{n\to\infty}u_n=
\begin{cases}
\;1 & x=q_k\;\text{where}\; k \le n\\
\;0 & \text{otherwise}\\
\end{cases}
```

Here $q_k$ is the enumeration of rational numbers in $[0,1]$.

## Dominated Convergence Theorem

Let $f_n$ be a sequence of Riemann integrable functions on $[a,b]$. Suppose
$f_n$ converges to $f$ pointwise where $f$ is Riemann integrable on $[a,b]$. If
$\exists M>0\;\forall n\; \forall x \in [a,b]\;\text{s.t.}\; \lvert f_n(x)
\rvert \le M $:

```math
\lim_\limits{n\to \infty}
\int_a^b f_n(x)\,\text{d}x
=
\int_a^b f(x)\,\text{d}x
```

## Monotone Convergence Theorem

Let $f_n$ be a sequence of Riemann integrable functions on $[a,b]$, and they are
monotone (all increasing or decreasing, like $f_1 \le f_2 \cdots \le f_n$).
Suppose $f_n$ converges to $f$ pointwise where $f$ is Riemann integrable on
$[a,b]$. If $\exists M>0\;\forall n\; \forall x \in [a,b]\;\text{s.t.}\; \lvert
f_n(x) \rvert \le M $:

```math
\lim_\limits{n\to \infty}
\int_a^b f_n(x)\,\text{d}x
=
\int_a^b f(x)\,\text{d}x
```

Can be proven from the dominated convergence theorem.

## Weierstrass M-test

To test if a sequence of functions converges uniformly and absolutely.

Let $f_n$ be a sequence functions on a set $A$. And both these conditions are
met:

- $\forall n \ge 1\;\exists M_n \ge 0\; \forall x \in A\;; \lvert f_n(x) \rvert \le M_n$
- $\sum_{n=1}^\infty M_n$ converges

Then:

```math
\sum_{n=1}^\infty f_n(x)\; \text{converges}
```

## Uniform convergence and continuity

If $u_n(x)$ is continuous and converging to $u(x)$, then $u(x)$ is also
continuous.

:::note[Proof Hint]

Consider the limit definitions of:

1. $u_n(x)$ converges to $u(x)$
2. $u_n(x)$ is continuous at $a$

Consider $\lvert u(x)-u(a)\rvert$. Introduce $u_n(x)$ and $u_n(a)$ in there.
Split into 3 absolute values. Show that the sum is lesser than $3\epsilon$.

:::

## Uniform convergence and supremum

A sequence of functions $u_n(x)$ converges to $u(x)$ uniformly **iff**:

```math
\lim_\limits{n\to\infty} \sup_x\, \lvert u_n(x) - u(x) \rvert = 0
```

:::note[Proof Hint]

Let $l_n=\lvert u_n(x)-u(x) \rvert$. $ $

To prove $\implies$: $ $

- Consider the epsilon-delta definition of uniform convergence
- $\frac{\epsilon}{2}$ is an upperbound of $l_n$
- $\sup_x l_n \le \frac{\epsilon}{2} \lt \epsilon $

To prove $\impliedby$: $ $

- Consider the epsilon-delta definition of the above limit
- $l_n \lt \sup_x l_n \lt \epsilon $

:::
