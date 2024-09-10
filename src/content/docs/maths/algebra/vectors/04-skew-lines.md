---
title: Skew Lines
slug: maths/algebra/vectors/skew-lines
sidebar:
  order: 4
---

Two non-parallel lines in a 3-space that do not intersect.

## Normal to 2 skew lines

Let $l_1,l_2$ be 2 skew lines.$ $

```math
l_1:
\frac{x-x_0}{a_0}
=
\frac{y-y_0}{b_0}
=
\frac{z-z_0}{c_0}
\;;\;\;
l_2:
\frac{x-x_1}{a_1}
=
\frac{y-y_1}{b_1}
=
\frac{z-z_1}{c_1}
```

The unit normal to both lines $\underline{n}$ is:$ $

```math
\underline{n}=\frac{
\langle
a_0,b_0,c_0
\rangle
\times
\langle
a_1,b_1,c_1
\rangle
}{
\lvert
\langle
a_0,b_0,c_0
\rangle
\times
\langle
a_1,b_1,c_1
\rangle
\rvert
}
```

## Distance between 2 skew lines

```math
\text{distance}=\lvert{\overrightarrow{AB}\cdot\underline{n}}\rvert
```

Here

- $\underline{n}$ is the normal to both $l_1,l_2$
- $A$ and $B$ are points lying on each line
