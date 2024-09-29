---
title: Introduction to Vectors
slug: maths/vectors/introduction
sidebar:
  order: 1
---

Revise Vectors unit from G.C.E (A/L) Combined Mathematics.

## Section formula

Suppose $\text{O}$ is the reference point, and $\text{P,Q}$ are 2 points.

If $\text{R}$ divides the line segment $\text{PQ}$ in the ratio $m:n$ (both are
positive and $m \ge n$), the division can either be internal or external.

### Internally

```math
\overrightarrow{\text{OR}} = \frac{m\overrightarrow{\text{OQ}}+n\overrightarrow{\text{OP}}}{m+n}
```

### Externally

```math
\overrightarrow{\text{OR}} = \frac{m\overrightarrow{\text{OQ}}-n\overrightarrow{\text{OP}}}{m-n}
```

## Direction Cosines

Suppose $\vec{p} = a\underline{i}+b\underline{j}+c\underline{k}$. Direction
cosines of $p$ are $\cos{\alpha}, \cos{\beta},\cos{\gamma}$ where
$\alpha,\beta,\gamma$ are the angles $p$ makes with $x,y,z$ axes.

Unit vector in the direction of
$\vec{p}=\underline{i}\cos{\alpha}+\underline{j}\cos{\beta}+\underline{k}\cos{\gamma}$.
Because of this: $ $

```math
\cos^2{\alpha}+\cos^2{\beta}+\cos^2{\gamma}=1
```

## Direction Ratio

Ratio of the direction cosines is called as direction ratio.

```math
\cos{\alpha}\,:\,\cos{\beta}\,:\,\cos{\gamma}
```

## Cross Product

```math
a \times b
= \lvert a \rvert \lvert b \rvert sin{(\theta)} n
= \det
\Bigg(
\begin{matrix}
   i & j & k \\
	 a_x & a_y & a_z \\
   b_x & b_y & b_z
\end{matrix}
\Bigg)
```

$ n $ is the **unit normal vector** to $ a $ and $ b $. Direction is based on
the right hand rule.

$ a \times b = 0 \implies \lvert a \rvert = 0 \lor \lvert b \rvert = 0 \lor a
\parallel b $

Cross products between $i$, $j$, $k$ are circular.

![Cross products of i,j,k](/maths/ijk-cross-product.jpg)

### Properties

- $a \times a = 0$
- $(a\times b) = -(b \times a)$
- $a \times (b + c) = (a \times b) + (a \times c)$

:::note

Area of a parallelogram $ABCD = \lvert \vec{AB} \times \vec{AD} \rvert $ $ $

:::

## Scalar Triple Product

```math
[a,b,c]
= a \cdot (b \times c)
= \det
\Bigg(
\begin{matrix}
	 a_x & a_y & a_z \\
   b_x & b_y & b_z \\
   c_x & c_y & c_z
\end{matrix}
\Bigg)
```

$ [a,b,c] = a \cdot (b \times c) = (a \times b) \cdot c $

$ [a,b,c] = [b,c,a] = [c,a,b] = -[a,c,b] $

$ [a,b,c] = 0 $ **iff** $a$, $b$, $c$ are coplanar. Swapping any 2 vectors will
negate the product.

:::note

Volume of a parallelepiped with $a$, $b$, $c$ as adjacent edges = $ [a,b,c] $

Volume of a tetrahedron with $a$, $b$, $c$ as adjacent edges = $
\frac{1}{6}[a,b,c] $

:::

## Vector Triple Product

$ a \times (b \times c) = (a \cdot c)b - (a \cdot b)c $

Resulting vector lies in the plane that contains $b$ and $c$
