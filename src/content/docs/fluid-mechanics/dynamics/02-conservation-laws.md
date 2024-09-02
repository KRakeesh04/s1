---
title: Conservation Laws
slug: fluid-mechanics/dynamics/conservation-laws
sidebar:
  order: 2
---

In fluid dynamics, 4 laws are used to analyse the fluid flow.

- Laws of mechanics
- Conservation of mass
- Conservation of energy
- Conservation of momentum

These laws are applied to a specific volume of the fluid in motion, and it's
called as control volume.

## Control volume

A volume, through which a fluid flows.

## Conservation of mass

Mass cannot be created nor destroyed.

## Conservation of energy

Energy cannot be created nor destroyed, but can be converted from one form to
another.

## Derivations

### Continuity equation

From the conservation of mass law, the below equation can be derived for an
incompressible fluid:

```math
Q= Av
```

Here:

- $Q$ - Flow rate
- $A$ - Cross-sectional area
- $v$ - velocity

### Bernoulli's equation

For an incompressible fluid in steady flow, total head on a point is constant
throughout a [streamline](/fluid-mechanics/dynamics/introduction/#streamline).
Can be derived from the conservation of energy law.

```math
\text{Total head }H= z + \frac{P}{\rho g} + \frac{v^2}{2g}
```

Here:

- $z$ - Datum head. Height to the point from a reference level.
- $\frac{P}{\rho g}$ - [Pressure head](/fluid-mechanics/statics/pressure-head/).
- $\frac{v^2}{2g}$ - Velocity head. Kinetic energy per unit weight.

:::note

- Head is the energy per unit weight.
- Piezometric head is equal to $\frac{P^*}{\rho g}$ where $P^*$ is the
  piezometric pressure.

:::
