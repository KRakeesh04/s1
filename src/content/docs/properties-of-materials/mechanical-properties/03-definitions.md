---
title: Definitions
slug: properties-of-materials/mechanical-properties/definitions
sidebar:
  order: 3
---

## Elastic deformation (elasticity)

Deformation is temporary. Returns to its original shape when load is released.

### Linear elastic materials

When elastic deformation portion in stress-strain diagram is straight line.

#### Young's modulus (aka Elastic modulus)

```math
\text{Young's modulus }E=\frac{\text{stress}}{\text{strain}}=\frac{\sigma}{\epsilon}
```

Can be thought of as **stiffness**.

### Nonlinear elastic materials

When elastic deformation portion in stress-strain diagram is not straight line.

#### Secant modulus

Equal to the tangent of the line connecting a point in the stress-strain diagram
and the origin.

#### Tangent modulus

Equal to the instantaneous tangent on a point in the stress-strain diagram.

![Types of modulus](/props/types-of-modulus.jpg)

## Poisson's ratio

A tensile stress in a particular direction causes extension (say $\epsilon_z$)
in that direction and contraction in other two directions ($\epsilon_x$ and
$\epsilon_y$). For isotropic materials:

```math
v=-\frac{\epsilon_x}{\epsilon_z}=-\frac{\epsilon_y}{\epsilon_z}
```

For metals (if not given) can be taken as $v=0.34$. Rubber's poisson's ratio is
$0.5$ which is the maximum possible value, mathematically.

### Isotropic materials

Homogenous materials. $\epsilon_x=\epsilon_y$. $ $

## Plastic deformation (plasticity)

When stress is not proportional to strain. Deformation is permanent or
non-recoverable or **plastic**.

## Yield stress point

The point where plastic deformation starts in stress-strain diagram.

## Yield strength

Stress at yield stress point. Denoted by $\sigma_y$. Used when the strength of a
metal is cited for design purposes. $ $

True yield stress point is very difficult to find practically. Therefore
**strain offset method** is used to find an approximate yield strength.

### Strain offset method

A straight line is constructed parallel to the elastic portion of the
stress-strain curve at some specified strain offset. The stress corresponding to
the intersection of this line and the stress-strain curve is defined as the
yield strength $\sigma_y$. $ $

### 0.2% proof stress

Yield strength when $0.002$ is used in strain offset method. $ $

:::note[For steel]

Yield strength is taken as the average stress at the lower yield point. Strain
offset method is not required. Upper yield point occurs because of C atoms, and
is specific to steel.

:::

## Tensile strength

After yielding, the stress necessary to continue plastic deformation increases
to a maximum, and then decreases.

### Ultimate tensile strength (UTS)

The maximum stress that can be sustained by a material in tension.

## Toughness

The strain energy absorbed by a material before fracture.

## Fracture

Separation of a solid into more than 1 parts under load or stress.

Based on the type of load:

- Tensile fracture
- Compressive fracture
- Shear fracture
- Fatigue fracture
- Creep fracture

Characterized into 2:

- Ductile fracture
- Brittle fracture

### Ductile fracture

Materials show significant amount of plastic deformation prior to fracture.
Fracture surface gives cup & cone appearance. Aka. cup-and-cone fracture.

Steps:

1. Specimen forms a neck
2. Cavities start to form within the neck
3. Cavities join with each other and form a crack
4. Crack propagates towards surface perpendicular to stress
5. Direction of crack changes to $45^\circ$

### Brittle fracture

Little or no plastic deformation prior to fracture. Fracture surface is smooth.

More dangerous than ductile fracture.

- No warning sign
- Crack propagates at very high speeds
- No need for extra stress during crack propagation.

## Ductility & Brittleness

Depends on:

- Composition of the material
- Temperature

## Ductile to Brittle Transition Temperature

The temperature which a material is:

- brittle below the temperature
- ductile above the temperature

Many steels exhibit this behaviour.
