---
title: Vector Equations
---

## Straight Lines

## Line that passes through the point $\underline{r_0}$ and parallel to $\underline{v}$

Here $r_0=(x_0, y_0, z_0)$ and
$\underline{v}=a\underline{i}+b\underline{j}+c\underline{k}$

### Parametric equation

$\underline{r}=\underline{r_0}+t\underline{v};\;t\in\mathbb{R}$

### Symmetric equation

```math
\frac{x-x_0}{a}
=
\frac{y-y_0}{b}
=
\frac{z-z_0}{c}
```

## Line that passes through the point $A$ and $B$

Here $A=(x_1,y_1,z_1)$, $B=(x_2,y_2,z_2)$. $r_A$ and $r_B$ are the position
vectors of $A$ and $B$.

### Parametric equation

$\underline{r}=(1-t)\underline{r_A}+t\underline{r_B};\;t\in\mathbb{R}$

### Symmetric equation

```math
\frac{x-x_1}{x_2-x_1}
=
\frac{y-y_1}{y_2-y_1}
=
\frac{z-z_1}{z_2-z_1}
```

## Angle between two straight lines

Let $\alpha:\frac{x-x_1}{a_1}=\frac{y-y_1}{b_1}=\frac{z-z_1}{c_1}$,
$\beta:\frac{x-x_2}{a_2}=\frac{y-y_2}{b_2}=\frac{z-z_2}{c_2}$ be two lines.

```math
cos{\theta}=
\frac{
	(a_1\underline{i}+b_1\underline{j}+c_1\underline{k})
	\cdot
	(a_2\underline{i}+b_2\underline{j}+c_2\underline{k})
}{
	\lvert{a_1\underline{i}+b_1\underline{j}+c_1\underline{k}}\rvert
	\lvert{a_2\underline{i}+b_2\underline{j}+c_2\underline{k}}\rvert
}
```
