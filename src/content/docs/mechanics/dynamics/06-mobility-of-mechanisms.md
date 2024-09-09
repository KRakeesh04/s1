---
title: Mobility of Mechanisms
slug: mechanics/dynamics/mobility-of-mechanisms
sidebar:
  order: 6
---

### Lower Pair

A pair of kinematic elements which share a surface of contact.

When a rigid body is constrained by a lower pair, which allows only rotational
or sliding movement. It has one degree of freedom, and the two degrees of
freedom are lost.

### Higher Pair

A pair of kinematic elements which share only a line or a point of contact.

When a rigid body is constrained by a higher pair, it has two degrees of
freedom: translating along the curved surface and turning about the
instantaneous contact point.

## Grubler's Equation

Suppose $N$ kinematic elements are brought together. $1$ of them is fixed. The
remaining elements have $3(N-1)$ degrees of freedom. But each lower pairs loses
$2$ degrees of freedom. Each higher pairs loses $1$ degree of freedom.

```math
F=3(N-1)-2L-H=1 \implies 3N-2L+H=4
```

Here:

- $F$ - degree of freedoms
- $N$ - number of kinematic elements
- $L$ - number of lower pairs
- $H$ - number of higher pairs

:::note

> "You lose some freedom when you become a couple." -- Our Dynamics lecturer

:::
