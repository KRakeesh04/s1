---
title: Power Series
slug: maths/real-analysis/power-series
sidebar:
  order: 29
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
[ratio test](/maths/real-analysis/convergence-tests#ratio-test) or
[root test](/maths/real-analysis/convergence-tests#root-test).

### Radius of convergence

Maximum radius of $x$ in where the series converges. $ $

```math
R = \sup{\big\{r\;|\; \text{series converges for}\; \lvert x-c \rvert < r\big\}}
```

The below equation can be used to find $R$: $ $

```math
\lim_\limits{k\to \infty} |a_k|^{\frac{1}{k}} = \frac{1}{R}
```

The series may converge or diverge for $\lvert x - c \rvert = R$. $ $

### Range of convergence

$(c-R,c+R)$ is the range of convergence. Aka. interval of convergence. The
series may converge or diverge at the endpoints. Endpoints must be checked
separately to find out if they must be included in the range of convergence. $ $

The series is:

- Absolutely converging for $\lvert x-a \rvert \lt R$
- Diverging for $\lvert x-a \rvert \lt R$
- Uniformly converging for $\lvert x-a \rvert \le \rho \lt R$

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
