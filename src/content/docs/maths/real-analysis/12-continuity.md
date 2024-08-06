---
title: Continuity
slug: maths/real-analysis/continuity
sidebar:
  order: 12
---

A function $f$ is continuous at $a$ **iff**:

```math
\lim_{x\to a}{f(x)}=f(a)
```

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(|x-a|<\delta\implies{|f(x)-L|<\epsilon})
```

## One-side continuous

A function $f$ is continuous from right at $a$ **iff**:

```math
\lim_{x\to a^{+}}{f(x)}=f(a)
```

A function $f$ is continuous from left at $a$ **iff**:

```math
\lim_{x\to a^{-}}{f(x)}=f(a)
```

## Continuous on an open interval

A function $f$ is continuous in $(a,b)$ **iff** $f$ is continuous on every
$c\in(a,b)$.

## Continuous on a closed interval

A function $f$ is continuous in $[a,b]$ **iff** $f$ is:

- continuous on every $c\in(a,b)$
- right-continuous at $a$
- left-continuous at $b$
