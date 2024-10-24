---
title: Taylor's Theorem
slug: maths/real-analysis/taylor-theorem
sidebar:
  order: 19
---

Let $f$ is $n+1$ differentiable on $(a,b)$. Let $c,x \in (a,b)$. Then
$\exists \zeta \in (c,x) \text{ s.t. }$:

```math
f(x)=
f(c)
+
\sum_{k=1}^{n}{\frac{f^{(k)}(c)}{k!}(x-c)^k}
+
\frac{f^{(n+1)}(\zeta)}{(n+1)!}{(x-c)}^{n+1}
```

[Mean value theorem](/maths/real-analysis/other-theorems/#mean-value-theorem)
can be derived from taylor's theorem when $n=0$. $ $

:::note[Proof Hint]

```math
F(t)= f(t)+\sum_{k=1}^{n}{\frac{f^{(k)}(t)}{k!}(x-t)^k}
```

```math
G(t)=(x-t)^{n+1}
```

- Define $F,G$ as mentioned above
- Consider the interval $[c,x]$
- Use
  [Cauchy's mean value theorem](/maths/real-analysis/other-theorems/#cauchys-mean-value-theorem)
  for $F,G$ after making sure the conditions are met.

:::

The above equation can be written like:

```math
f(x)=T_n(x,c)+R_n(x,c)
```

## Taylor Polynomial

This part of the above equation is called the Taylor polynomial. Denoted by
$T_n(x,c)$. $ $

```math
T_n(x,c)=
f(c)
+
\sum_{k=1}^{n}{\frac{f^{(k)}(c)}{k!}(x-c)^k}
```

## Remainder

Denoted by $R_n(x,c)$. $ $

```math
R_n(x,c)=
\frac{f^{(n+1)}(\zeta)}{(n+1)!}{(x-c)}^{n+1}
```

### Integral form of the remainder

```math
R_n(x,c)=
\frac{1}{n!}
\int_c^x{f^{(n+1)}(t)(x-t)^n}\text{d}t
```

:::note[Proof Hint]

- Method 1: Use integration by parts and mathematical induction.
- Method 2: Use
  [Generalized MVT for Riemann Integrals](/maths/real-analysis/other-theorems/#generalized-mvt-for-riemann-integrals)
  where:
  - $F=f^{(n+1)}$
  - $G=(x-t)^n$

:::

## Second derivative test

When $n=1$: $ $

```math
f(x)=f(c)+f'(c)(x-c)+\frac{f''(\zeta)}{2!}(x-c)^2
```

```math
f(x)-\text{Tangent line}=\frac{f''(\zeta)}{2!}(x-c)^2
```

From this: $f''(c)>0 \implies $ a local minimum is at $c$. Converse is **not**
true.
