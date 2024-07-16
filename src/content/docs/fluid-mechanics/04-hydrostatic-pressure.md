---
title: Hydrostatic Pressure
slug: fluid-mechanics/hydrostatic-pressure
---

![Pressure Definition](/fluids/pressure-definition.png)

At a point,

```math
P = \lim_{\delta A \to 0} \frac{\delta F}{\delta A}
```

## Characteristics

### Pascal's law

The hydrostatic pressure at a point is the same from all directions. Applies
only for hydrostatic pressure.

#### Proof

![Proof of Pascal's law](/fluids/pascal-law-proof.png)

### Variation along directions

#### Proof

Let $p$ be the pressure at the point $A\equiv (x,y,z)$.

$ p = f(x,y,z) $

```math
dp =
\frac{\partial p}{\partial x} \text{d}x
+
\frac{\partial p}{\partial y} \text{d}y
+
\frac{\partial p}{\partial z} \text{d}z
```

By considering equilibrium of this fluid element containing $A$. $ $

![Fluid element containing point A](/fluids/fluid-element-containing-a.png)

In the $x$ direction,$ $

```math
\bigg(
	p -
	\frac{\partial p}{\partial x} \frac{\Delta{x}}{2}
\bigg)
\Delta{y}
\Delta{z}
-
\bigg(
	p +
	\frac{\partial p}{\partial x} \frac{\Delta{x}}{2}
\bigg)
\Delta{y}
\Delta{z}

= 0
```

```math
\frac{\partial p}{\partial x} = 0
```

Similarly $ \frac{\partial p}{\partial y} = 0 $ can be proven. $ $

In the $z$ direction,$ $

```math
\bigg(
	p -
	\frac{\partial p}{\partial z} \frac{\Delta{z}}{2}
\bigg)
\Delta{x}
\Delta{y}
-
\bigg(
	p +
	\frac{\partial p}{\partial z} \frac{\Delta{z}}{2}
\bigg)
\Delta{x}
\Delta{y}

-
\Delta{x}
\Delta{y}
\Delta{z}
\rho
g

= 0
```

```math
\frac{\partial p}{\partial z} = -\rho g
```

```math
dp = -\rho g\,\text{d}z
```

```math
p = -\int{\rho g\,\text{d}z}
```

:::note[For incompressible fluids]

$\rho$ is constant. $p = -\rho g\int{\text{d}z} = -\rho gz + c = f(z)$.

:::

## Piezometric pressure

$ P = -\rho gz + c $

```math
P + \rho gz = c = P^{*}
```

## Pressure difference between 2 points

![Pressure difference](/fluids/pressure-difference.png)

$ P_1 = -\rho gz_1 + c $

$ P_2 = -\rho gz_2 + c $

$ P_2 - P_1 = -\rho g(z_2 - z_1) = -\rho g (-h) = h \rho g $

$ P_2 = P_1 + h \rho g $

In a homogenous, incompressible fluid in equilibrium:

1. Piezometric pressure is constant throughout the fluid
2. Pressure varies linearly with depth only
3. Isobars (surface of constant pressure) are horizontal.
