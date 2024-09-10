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

Consider $2$ cases: $ $

1. Both minimum and maximum exist at $a$ and $b$.
2. One of minimum or maximum occurs in $(a,b)$.

:::

## Mean Value Theorem

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; f'(c)=\cfrac{f(b)-f(a)}{b-a}
```

:::note[Proof Hint]

- Define $g(x)=f(x)-\Big(\frac{f(a)-f(b)}{a-b}\Big)x$
- $g(a)$ will be equal to $g(b)$
- Use Rolle's Theorem for $g$

:::

## Cauchy's Mean Value Theorem

Let $f$ and $g$ be continuous on $[a,b]$ and differentiable on $(a,b)$, and
$\forall x \in (a,b)\;g'(x) \neq 0$ Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; \frac{f'(c)}{g'(c)}=\cfrac{f(b)-f(a)}{g(b)-g(a)}
```

:::note[Proof Hint]

- Define $h(x)=f(x)-\Big(\frac{f(a)-f(b)}{g(a)-g(b)}\Big)g(x)$
- $h(a)$ will be equal to $h(b)$
- Use Rolle's Theorem for $h$

:::

Mean value theorem can be obtained from this when $g(x)=x$. $ $

## Generalized MVT for Riemann Integrals

Let $f,g$ be continuous on $[a,b]$ ($\implies f,g$ are integrable), and $g$ does
not change sign on $(a,b)$. Then $\exists \zeta \in (a,b)$ such that:

```math
\int_a^b {f(x)g(x)\text{d}x}=
f(\zeta)\int_a^b{g(x)\text{d}x}
```

:::note[Proof Hint]

- Use
  [Extreme value theorem](/maths/real-analysis/theorems-related-to-continuity/#extreme-value-theorem)
  for $f$
- Multiply by $g(x)$. Then integrate. Then divide by $\int_a^b{g(x)}$.
- Use intermediate value theorem to find $f(\zeta)$

:::

## L'Hopital's Rule

:::note

Be careful with the pronunciation.

- It's not "Hospital's Rule", there are no "s"
- It's not "Hopital's Rule" either, there is a "L'"

:::

L'Hopital's Rule can be used when all of these conditions are met. (here
$\delta$ is some positive number). Select the appropriate $x$ ranges. $ $

1. Either of these conditions must be satisfied
   - $f(a)=g(a)=0$
   - $\lim{f(x)}=\lim{g(x)}=0$
   - $\lim{f(x)}=\lim{g(x)}=\infty$
2. $f,g$ are continuous on $x\in[a,a+\delta]$
3. $f,g$ are differentiable on $x\in(a,a+\delta)$
4. $g'(x) \neq 0$ on $x\in(a,a+\delta)$
5. $\lim\limits_{x\to a^{\text{+}}}{\frac{f'(x)}{g'(x)}}=L\in\mathbb{R}$

Then: $\lim\limits_{x\to a^{\text{+}}}{\frac{f(x)}{g(x)}}=L$ $ $

:::note

L'Hopital's rule can be proven using Cauchy's Mean Value Theorem.

It is valid for all types of "x limits".

:::
