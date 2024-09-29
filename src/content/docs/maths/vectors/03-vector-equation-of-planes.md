---
title: Vector Equation of Planes
slug: maths/vectors/vector-equation-of-planes
sidebar:
  order: 3
---

### Contains a point and parallel to 2 vectors

Suppose a plane:

- is parallel to both $\underline{a}$ and $\underline{b}$
- contains $\underline{r_0}=x_0\underline{i}+y_0\underline{j}+z_0\underline{k}$

Equation for the plane is:

```math
\underline{r}=\underline{r_0}+s\underline{a}+t\underline{b}\;;\;s,t\in\mathbb{R}
```

### Contains a point and normal is given

Suppose a plane:

- contains $\underline{r_0}=x_0\underline{i}+y_0\underline{j}+z_0\underline{k}$
- has a normal $\underline{n}$

Equation for the plane is:

```math
(\underline{r}-\underline{r_0})\cdot\underline{n} = 0
```

### Contains 3 points

Suppose a plane contains $r_0,r_1,r_2$
($\underline{r_0},\underline{r_1},\underline{r_2}$ are the position vectors of
respectively).

```math
(\underline{r}-\underline{r_1})
\,
\cdot
\,
\Big[
    (\underline{r_1}-\underline{r_0})
    \times
    (\underline{r_1}-\underline{r_2})
\Big] = 0
```

## Normal to a plane

Suppose $ax+by+cz=d$ is a plane.
$\underline{n}=a\underline{i}+b\underline{j}+c\underline{k}$ is a normal to the
plane.

## Angle between 2 planes

Consider the two planes:

- $A: a_1x+a_2y+a_3z=d$
- $B: b_1x+b_2y+b_3z=d'$

The angle between the planes $\phi$ is given by: $ $

```math
\cos(\phi)
=\frac{\underline{n_A}\cdot\underline{n_B}}{|n_A|\cdot|n_B|}
=\frac{a_1b_1+a_2b_2+a_3b_3}{\sqrt{(a_1^2+a_2^2+a_3^2)(b_1^2+b_2^2+b_3^2)}}
```

Here $\underline{n_A},\underline{n_B}$ are normal to the planes $A,B$.

## Shortest distance to a point

Considering a plane $ax+by+cz=d$.$ $

```math
\text{distance}=
\frac{
\lvert
(\underline{r_1}-\underline{r_0})\cdot\underline{n}
\rvert
}{
\lvert{\underline{n}}\rvert
}
```

- $\underline{n}$ is a normal to the plane
- $\underline{r_0}$ is the position vector of a point on the plane
- $\underline{r_1}$ is the position vector to the arbitrary point
