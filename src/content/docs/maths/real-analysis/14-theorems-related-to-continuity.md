---
title: Continuity Theorems
slug: maths/real-analysis/theorems-related-to-continuity
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

Proof the case when $u=0$. Otherwise define a new function $g(x)$ such that
middle part of the above inequality has a $0$ in the place of $u$.

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

To proof this, take $\epsilon=\frac{f(a)}{2}$. $ $

:::

### Negative

Let $f$ be continuous on $a$ and $f(a)<0$

$\implies \exists \delta >0; \forall x\,(|x-a|\lt\delta \implies f(x)<0) $ $ $

:::note[Proof Hint]

To proof this, take $\epsilon=-\frac{f(a)}{2}$. $ $

:::
