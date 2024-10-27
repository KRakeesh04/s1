---
title: Limits
slug: maths/real-analysis/limits
sidebar:
  order: 12
---

$\lim_\limits{x\to{a}}{f(x)}=L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(0<|x-a|<\delta\implies{|f(x)-L|<\epsilon})
```

Defining $\delta$ in terms of a given $\epsilon$ is enough to prove a limit.

## One sided limits

### In x-limit

```math
\lim_\limits{x\to{a}}{f(x)}=L
\iff
\Big(
\lim_\limits{x\to{a^-}}{f(x)}=L
\land
\lim_\limits{x\to{a^-}}{f(x)}=L
\Big)
```

#### Right limit

$\lim_\limits{x\to{a^{-}}}{f(x)}=L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(-\delta<x-a<0\implies{|f(x)-L|<\epsilon})
```

#### Left limit

$\lim_\limits{x\to{a^{+}}}{f(x)}=L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(0<x-a<\delta\implies{|f(x)-L|<\epsilon})
```

### In the answer

```math
\lim_\limits{x\to{a}}{f(x)}=L
\iff
\Big(
\lim_\limits{x\to{a}}{f(x)}=L^{+}
\lor
\lim_\limits{x\to{a}}{f(x)}=L^{-}
\Big)
```

#### Top limit

$\lim_\limits{x\to{a}}{f(x)}=L^{+}$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(0<\lvert{x-a}\rvert<\delta\implies{0\le f(x)-L<\epsilon})
```

#### Bottom limit

$\lim_\limits{x\to{a}}{f(x)}=L^{-}$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(0<\lvert{x-a}\rvert<\delta\implies{-\epsilon\lt f(x)-L\le 0})
```

## Limits including infinite

### In x-limit

#### Positive infinity

$\lim_\limits{x\to{\infty}}{f(x)}=L$ **iff**: $ $

```math
\forall{\epsilon\gt 0}\;
\exists{N>0}\;
\forall{x}\;
(x\gt N\implies{|f(x)-L|<\epsilon})
```

#### Negative infinity

$\lim_\limits{x\to{-\infty}}{f(x)}=L$ **iff**: $ $

```math
\forall{\epsilon\gt 0}\;
\exists{N>0}\;
\forall{x}\;
(x\lt-N\implies{|f(x)-L|<\epsilon})
```

### In the answer

#### Positive infinity

$\lim_\limits{x\to a}{f(x)}=\infty$ **iff**: $ $

```math
\forall{M\gt 0}\;
\exists{\delta>0}\;
\forall{x}\;
(0<\lvert{x-a}\rvert<\delta\implies{f(x)\gt M})
```

#### Negative infinity

$\lim_\limits{x\to a}{f(x)}=-\infty$ **iff**: $ $

```math
\forall{M\gt 0}\;
\exists{\delta>0}\;
\forall{x}\;
(0<\lvert{x-a}\rvert<\delta\implies{f(x)\lt-M})
```

## Indeterminate forms

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$
- $\infty\cdot0$
- $\infty-\infty$
- $\infty^{0}$
- $0^0$
- $1^\infty$

## Well-known limits

```math
\lim_\limits{x\to 0} \frac{\sin x}{x} = 1
```

:::note[Proof hint]

Squeeze theorem with $\sin \theta \cos \theta \lt \theta \lt \tan\theta$. $ $

:::

```math
\lim_\limits{x\to a} \frac{x^n - a^n}{x - a} = na^{n-1}
```

```math
\lim_\limits{x\to \infty} \big(1+\frac{a}{x}\big)^x = e^a
```
