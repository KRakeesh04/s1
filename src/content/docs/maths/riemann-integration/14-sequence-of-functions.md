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
\exists N\;
\forall x\in [a,b]\;
\;
\text{s.t.}
\;
\big|f_n(x)-f(x)\big| \lt \epsilon
```

Here $N$ depends on $\epsilon$ only.

### Pointwise convergence

```math
\forall \epsilon \gt 0\;
\exists N\;
\forall x\in [a,b]\;
\;
\text{s.t.}
\;
\big|f_n(x)-f(x)\big| \lt \epsilon
```

Here $N$ depends on $\epsilon, x$.

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

Let $f_n$ be a sequence functions on a set $A$. And $\exists M_n \ge 0$
satisfying both these conditions:

- $\forall n \ge 1\;\forall x \in A,\; \lvert f_n(x) \rvert \le M_n$
- $\sum_{n=1}^\infty M_n$ converges

Then:

```math
\sum_{n=1}^\infty f_n(x)\; \text{converges}
```
