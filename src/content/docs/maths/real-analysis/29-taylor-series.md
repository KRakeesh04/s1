---
title: Taylor Series
slug: maths/real-analysis/taylor-series
sidebar:
  order: 29
---

Let $f$ be infinitely many times differentiable on $(a,b)$ and $c,x \in (a,b)$.

If $\lim_\limits{n\to \infty} R_n(x) = 0$ for $x \in (c-R, c+R) \subset (a,b)$,
then Taylor series of $f$ at $c$ is given by:

```math
\sum_{n=0}^\infty
\frac{f^{(n)}(c)}{n!}
(x-c)^n
```

## Examples

### e^x

Range of convergence is $\mathbb{R}$. $ $

```math
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
```

### ln (1+x)

Range of convergence is $(-1,1]$. $ $

```math
\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}x^n}{n} = x - \frac{x^2}{2!} + \frac{x^3}{3!} - \frac{x^4}{4!} + \cdots
```

### sin x

Range of convergence is $\mathbb{R}$. $ $

```math
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
```

### cos x

Range of convergence is $\mathbb{R}$. $ $

```math
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
```
