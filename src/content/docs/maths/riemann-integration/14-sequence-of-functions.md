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

## Theorem

Let $f_n$ be a sequence of Riemann integrable functions on $[a,b]$. Suppose
$f_n$ convergex to $f$ uniformly. Then $f$ is Riemann integrable on $[a,b]$ and:

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
