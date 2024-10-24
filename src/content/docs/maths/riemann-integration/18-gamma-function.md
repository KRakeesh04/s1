---
title: Gamma function
slug: maths/riemann-integration/gamma-function
sidebar:
  order: 18
---

Defined as below for $n\gt 0$: $ $

```math
\Gamma(n)=\int_0^\infty e^{-x}x^{n-1}\,\text{d}x
```

Aka. Eulerian integral of the second kind.

## Convergence

$\Gamma(n)$ is convergent **iff** $n \gt 0$.

:::note[Proof Hint]

Direct comparison test is used. Proved in 3 cases:

- Case 1: for positive integer $n$ $ $
  - Consider the [lemma 2](#lemma-2)'s limit definition
  - Take $\epsilon=1$
  - Use the convergence of $\int_0^\infty e^{-x/2}\,\text{d}x$
- Case 2: for $n \gt 1$ non-integers $ $

  - Use $\lfloor n \rfloor \lt n \lt \lfloor n \rfloor + 1$
  - Use $x^{y-1}e^{-x} \le x^{\lfloor n \rfloor}e^{-x}$
  - $\Gamma(\lfloor n \rfloor + 1)$ is converging from case 1

- Case 3: for $0 \lt n \lt 1$. $ $
  - Proof is similar to case 1
  - But $\int_0^N e^{-x}x^{n-1}\,\text{d}x$ is an improper
  - Prove that it is also converging

:::

## Properties

Proofs are required for each property mentioned below.

- $\Gamma(1)=1$
- $\Gamma(n+1)=n\Gamma(n)$
- $\Gamma(n+1)=n!$

## Extension of gamma function

$\Gamma(n)$ function can be extended for negative non-integers using: $ $

```math
\Gamma(n) = \frac{\Gamma(n+1)}{n}
```

This cannot be used to define $\Gamma(0)$ because of the denominator. And
through induction, $\Gamma$ function cannot be defined for negative integers.

## Lemmas

### Lemma 1

```math
\forall s \gt 0 \; \int_0^\infty e^{-sx}\,\text{d}x\;\text{converges}
```

### Lemma 2

```math
\forall n \in\mathbb{Z}^+
\;
\lim_\limits{x\to\infty}
\frac{x^{n-1}}{e^{x/2}}
=0
```

## Transformations

Alternate forms of $\Gamma(n)$. $ $

### Form 1

```math
\Gamma(n)=\int_0^\infty e^{-x}x^{n-1}\,\text{d}x
```

:::note[Proof Hint]

Use $x^n=t$. $ $

:::

:::note

One of the most frequently used integrals in mathematics:

```math
\int_0^{\infty} e^{-x^2}\,\text{d}x = \frac{\sqrt{\pi}}{2}
```

:::

### Form 2

```math
\int_0^\infty e^{-kx}x^{n-1}\,\text{d}x
=
\frac{\Gamma(n)}{k^n}
```

:::note[Proof Hint]

Use $x=kt$. $ $

:::

### Form 3

```math
\Gamma(n)=
\int_0^1 \ln(\frac{1}{x})^{n-1} \,\text{d}x
```

:::note[Proof Hint]

Use $e^{-x}=t$. $ $

:::

### Form 4

```math
\Gamma(n) = 2 \int_0^\infty e^{-x^2} x^{2n-1}\,\text{d}x
```

:::note[Proof Hint]

Use $x=t^2$. $ $

:::
