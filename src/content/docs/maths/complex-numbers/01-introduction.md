---
title: Introduction to Complex Numbers
slug: maths/complex-numbers/introduction
sidebar:
  order: 1
---

### Representation methods

![Representation of a complex number](/maths/complex/representation-methods.jpg)

The methods are:

- Cartesian representation: $z=x+iy$
- Polar representation: $z=pe^{i\theta}$

Here:

- $x = p\cos{\theta}$ - real part
- $y=p\sin{\theta}$ - imaginary part
- $p=\sqrt{x^{2} + y^{2}}$ - modulus
- $\theta=\tan^{-1}{(\frac{y}{x})}$ - arg angle

## Euler's Formula

For $x\in\mathbb{R}$: $ $

```math
e^{ix} = \cos{x} + i\sin{x}
```

:::note[Proof Hint]

Use power series for $e^x,\cos{x}, \sin{x}$. $ $

```math
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
```

```math
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
```

```math
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
```

:::

## Euler's Identity

One of the most beautiful equations in mathematics.

```math
e^{i\pi} + 1 = 0
```
