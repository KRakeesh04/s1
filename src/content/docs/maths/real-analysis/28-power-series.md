---
title: Power Series
slug: maths/real-analysis/power-series
sidebar:
  order: 28
---

A series of the form:

```math
\sum_{n=0}^\infty
a_n (x-c)^n
```

Here:

- $x$ - a variable
- $c$ - a constant

Convergence of a power series can be checked using
[root test](/maths/real-analysis/convergence-tests#root-test).

### Radius of convergence

Maximum radius of $x$ in where the series converges. $ $

```math
R = \sup{\big\{r\;|\; \text{series converges for}\; |x-c| < r\big\}}
```

The below equation can be used to find $R$: $ $

```math
\lim_\limits{k\to \infty} |a_k|^{\frac{1}{k}} = \frac{1}{R}
```

### Range of convergence

$(c-R,c+R)$ is the range of convergence. $ $

## Theorem 1

If $R \in (0,\infty)$ and $\lvert x-a \rvert \le p$ for $p \lt R$, then $s_n(x)$
is uniformly (and absolutely) converging.

:::note[Proof Hint]

- Note the relation between $R$ and $a_k$
- Prove $(\frac{p+R}{2pR})^k$ is an upperbound to $|a_k|^{\frac{1}{k}}$, using
  it's infinity limit
- Define $M_k = (\frac{p+R}{2R})^k = r^k$
- Prove $M_k$ is a bound to $u_k$
- Prove $\sum_{k=1}^{n} r^k$ is converging as $0\lt r\lt 1$

:::
