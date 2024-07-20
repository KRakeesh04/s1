---
title: Wronskian
slug: maths/ode/wronskian
sidebar:
  order: 5
---

Consider the equation, where $P,Q$ are functions of $x$ alone, and which has
solutions $v(x),u(x)$:

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

:::note[Theorem]

The Wronskian of two solutions of the above differential equation is
**identically zero or never zero**.

:::

:::note[Theorem]

The solutions of the above differential equation are linearly dependent **iff**
their Wronskian vanish identically.

:::
