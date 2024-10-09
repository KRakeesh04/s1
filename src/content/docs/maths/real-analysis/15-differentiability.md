---
title: Differentiability
slug: maths/real-analysis/differentiability
sidebar:
  order: 15
---

A function $f$ is differentiable at $a$ **iff**:

```math
\lim_\limits{x\to a}{\frac{f(x)-f(a)}{x-a}} = L \in \mathbb{R} = f'(a)
```

$f'(a)$ is called the derivative of $f$ at $a$.

## One-side differentiable

### Left differentiable

A function $f$ is left-differentiable at $a$ **iff**:

```math
\lim_\limits{x\to a^{-}}{\frac{f(x)-f(a)}{x-a}} = L \in \mathbb{R} = f'_{-}(a)
```

### Right differentiable

A function $f$ is right-differentiable at $a$ **iff**:

```math
\lim_\limits{x\to a^{+}}{\frac{f(x)-f(a)}{x-a}} = L \in \mathbb{R} = f'_{+}(a)
```

## Differentiability implies continuity

$f \text{ is differentiable at } a \implies f \text{ is continuous at } a$

:::note[Proof Hint]

Use $\delta=min(\delta_1, \frac{\epsilon}{1 + |f'(a)|})$. $ $

:::

:::note

Suppose $f$ is differentiable at $a$. Define $g$:

```math

  g(x) =
\begin{cases}
  \;
\cfrac{f(x)-f(a)}{x-a},  & x \neq a \\[2ex]
\;
f'(a), & x=a
\end{cases}

```

$g$ is continuous at $a$.

:::

## Properties of differentiation

### Addition

```math
\frac{\text{d}}{\text{d}x} (f \pm g) =
f' \pm
g'
```

### Multiplication

```math
\frac{\text{d}}{\text{d}x} (fg) =
fg' + fg'
```

### Division

```math
\frac{\text{d}}{\text{d}x} \bigg(\frac{f}{g}\bigg) =
\frac{gf' - fg'}{g^2}
```

### Composition

```math
\frac{\text{d}}{\text{d}x} f(g(x)) = f'(g(x))\,g'(x)
```

### Power

```math
\frac{\text{d}}{\text{d}x} f^n = nf^{n-1}(x) f'(x)
```
