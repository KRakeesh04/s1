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
