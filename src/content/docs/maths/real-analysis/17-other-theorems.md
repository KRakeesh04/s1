---
title: Other Theorems
slug: maths/real-analysis/other-theorems
sidebar:
  order: 17
---

## Rolle's Theorem

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. And $f(a)=f(b)$.
Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; f'(c)=0
```

:::note[Proof Hint]

By
[Extreme Value Theorem](/maths/real-analysis/theorems-related-to-continuity/#extreme-value-theorem),
maximum and minimum exists for $f$. $ $

Consider 2 cases:

1. Both minimum and maximum exist at $a$ and $b$.
2. One of minimum or maximum occurs in $(a,b)$.

:::

## Mean Value Theorem

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; f'(c)=\cfrac{f(b)-f(a)}{b-a}
```

:::note[Proof Hint]

- Define $g(x)=f(x)-frac{f(a)-f(b)}{a-b}x$.
- $g(a)$ will be equal to $g(b)$.
- Use Rolle's Theorem for $g$.

:::

## Cauchy's Mean Value Theorem

Let $f$ and $g$ be continuous on $[a,b]$ and differentiable on $(a,b)$, and
$\forall x \in (a,b)\;g'(x) \neq 0$ Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; \frac{f'(c)}{g'(c)}=\cfrac{f(b)-f(a)}{g(b)-g(a)}
```

:::note[Proof Hint]

- Define $h(x)=f(x)-\Big(\frac{f(a)-f(b)}{g(a)-g(b)}\Big)g(x)$.
- $h(a)$ will be equal to $h(b)$.
- Use Rolle's Theorem for $h$.

:::

This is a more generalized version of the mean value theorem. Mean value theorem
is the case when $g(x)=x$. $ $

:::note

L'Hopital's rule can be proven using Cauchy's Mean Value Theorem.

:::

## L'Hopital's Rule

:::note Be careful with the pronunciation.

- It's not "Hospital's Rule", there are no "s"
- It's not "Hopital's Rule" either, there is a "L'".

:::

L'Hopital's Rule can be used when all of these conditions are met. (here
$\delta$ is some positive number). $ $

1. $f$ and $g$ are 2 functions defined at $a$
2. $f(a)=g(a)=0$  
   Also valid when either of these conditions is satisfied
   - $\lim{f(x)}=\lim{g(x)}=0$
   - $\lim{f(x)}=\lim{g(x)}=\infty$
3. $f,g$ are continuous on $x\in[a,a+\delta]$
4. $f,g$ are differentiable on $x\in(a,a+\delta)$
5. $g'(x) \neq 0$ on $x\in(a,a+\delta)$
6. $\lim\limits_{x\to a^{\text{+}}}{\frac{f'(x)}{g'(x)}}=L\in\mathbb{R}$

Then: $\lim\limits_{x\to a^{\text{+}}}{\frac{f(x)}{g(x)}}=L$ $ $

:::note

L'Hopital's Rule is valid for all types of "x limits".

:::
