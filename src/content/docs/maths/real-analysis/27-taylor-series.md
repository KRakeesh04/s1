---
title: Taylor Series
slug: maths/real-analysis/taylor-series
sidebar:
  order: 27
---

Let $f$ be infinitely many times differentiable on $(a,b)$ and $c,x \in (a,b)$.

If the remainder $R_m(x)$ limits to $0$ as $m$ limits to $\infty$ for
$x \in (c-R, c+R) \subset (a,b)$, then Taylor series of $f$ at $c$ is given by:

```math
\sum_{n=0}^\infty
\frac{f^{(n)}(c)}{n!}
(x-c)^n
```

Taylor series can be used to define $e^x$, $\cos x$, $\sin x$, $ln(1+x)$ and
more.