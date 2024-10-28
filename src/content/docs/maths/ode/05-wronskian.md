---
title: Wronskian
slug: maths/ode/wronskian
sidebar:
  order: 5
---

Consider the equation, where $P,Q$ are functions of $x$ alone, and which has $2$
fundamental solutions $u(x),v(x)$:

```math
y''+Py'+Qy=0
```

The Wronskian $w(x)$ of two solutions $u(x),v(x)$ of differential equation, is
defined to be:

```math
w(x)
= \Bigg\lvert{
\begin{matrix}
    u(x) & v(x) \\
	u'(x) & v'(x) \\
\end{matrix}
}
\Bigg\rvert
```

## Theorem 1

The Wronskian of two solutions of the above differential equation is
**identically zero or never zero**.

:::note

Identically zero means the function is always zero.

:::

### Proof

Consider the equation, where $P,Q$ are functions of $x$ alone.

```math
y''+Py'+Qy=0
```

Let $u(x),v(x)$ be $2$ fundamental solutions of the equation:

```math
u''+Pu'+Qu=0
\;\;\land\;\;
v''+Pv'+Qv=0
```

```math
w
= \Bigg\lvert{
\begin{matrix}
    u & v \\
	u' & v' \\
\end{matrix}
}
\Bigg\rvert
=uv'-vu'
```

```math
w'=uv''-vu''=-P[uv'-vu']=-Pw
```

By solving the above relation:

```math
w=c\cdot\exp{\bigg(-\int{P}\,\text{d}x\bigg)}
```

Suppose there exists $x_0$ such that $w(x_0)=0$. That implies $c=0$. That
implies $w$ is always $0$.

## Abel's forumla

The conclusion in the above proof is known as the Abel's formula.

```math
W(x)=c\exp{\bigg(-\int{P}\,\text{d}x\bigg)}
```

## Theorem 2

The solutions of the above differential equation are _linearly dependent_
**iff** their Wronskian vanish identically.
