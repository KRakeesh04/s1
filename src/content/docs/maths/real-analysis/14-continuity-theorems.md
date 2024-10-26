---
title: Continuity Theorems
slug: maths/real-analysis/continuity-theorems
sidebar:
  order: 14
---

## Extreme Value Theorem

If $f$ is continuous on $[a,b]$, $f$ has a maximum and a minimum in $[a,b]$.

:::note[Proof Hint]

Proof is quite hard.

:::

## Intermediate Value Theorem

Let $f$ is continuous on $[a,b]$. If $\exists u$ such that $f(a)>u>f(b)$ or
$f(a)<u<f(b)$: $\exists c \in (a,b)$ such that $f(c)=u$.

:::note[Proof Hint]

- Define $g(x)=f(x)-u$
- Define $A=\set\{ x \in [a,b) \,|\,g(x)\gt 0 \}$
- Show that $\sup A$ ($=c$) exists. Assume and contradict these cases:
  - $c=a$ (use $2\epsilon = g(a)$)
  - $c=b$ (use $2\epsilon = -g(b)$)
  - $c\in(a,b)$ then contradict:
    - $g(c) \gt 0$ (similar to $c=a$ case)
    - $g(c) \lt 0$ (similar to $c=b$ case)

:::

## Sandwich (or Squeeze) Theorem

Let:

- For some $\delta>0$:
  $\forall x (0<|x-a|<\delta \implies f(x)\le g(x) \le h(x) )$
- $\lim_\limits{x\to a} f(x) = \lim_\limits{x\to a} h(x) = L \in \mathbb{R}$

Then $\lim_\limits{x\to a} g(x) = L$. $ $

:::note

Works for any kind of x limits.

:::

## "No sudden changes"

### Positive

Let $f$ be continuous on $a$ and $f(a)>0$

$\implies \exists \delta >0; \forall x\,(|x-a|\lt\delta \implies f(x)>0) $ $ $

:::note[Proof Hint]

Take $\epsilon=\frac{f(a)}{2}$ $ $

:::

### Negative

Let $f$ be continuous on $a$ and $f(a)<0$

$\implies \exists \delta >0; \forall x\,(|x-a|\lt\delta \implies f(x)<0) $ $ $

:::note[Proof Hint]

Take $\epsilon=-\frac{f(a)}{2}$ $ $

:::
