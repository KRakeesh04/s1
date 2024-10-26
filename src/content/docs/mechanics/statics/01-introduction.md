---
title: Introduction to Statics
slug: mechanics/statics/introduction
sidebar:
  label: Introduction
  order: 1
---

## Centroid / Centre of area

The point where the area of a figure is assumed to be concentrated.

Located on the axes of symmetry.

## First moment of area

Measure of spatial distribution of a shape in relation to an axis.

```math
\text{About x-axis} = \int_A {y\; \text{d}A} = A\bar{x}
```

```math
\text{About y-axis} = \int_A {x\;\text{d}A} = A\bar{y}
```

Here:

- $\bar{x}$ - Centroid's $x$ coordinate
- $\bar{y}$ - Centroid's $y$ coordinate
- $A$ - Total area

About an axis of symmetry, first moment of area is $0$. $ $

## Second moment of area

```math
\text{About x-axis} = I_{xx} = I_x = \int_A {y^2\;\text{d}A}
```

```math
\text{About y-axis} = I_{yy} = I_y = \int_A {x^2\;\text{d}A}
```

Always positive.

## The product of moment of area about x,y axes

```math
I_{xy} = \int_A {xy\; \text{d}A}
```

## The polar moment of area about z axis

```math
I_{zz} = J_0 = \int_A {r^2\; \text{d}A} = I_{xx} + I_{yy}
```

## Radius of gyration

```math
\text{About x-axis} = r_x^2 = \frac{I_{xx}}{A}
```

```math
\text{About y-axis} = r_y^2 = \frac{I_{yy}}{A}
```

```math
\text{About z-axis} = r_z^2 = \frac{I_{zz}}{A}
```
