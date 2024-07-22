---
title: Tensile Test
slug: properties-of-materials/Mechanical Properties/tensile-test
sidebar:
  order: 2
---

Follows ASTM Standards E 8 and E 8M. (American Society for Testing and
Materials)

The specimen: ![Tensile Test Specimen](/props/tensile-test-specimen.png)

Here

- Gauge length $l_0$
- Initial diameter $d_0$
- Initial area $A_0=\frac{\pi{d_0}^2}{4}$

Test will be done until the specimen fractures.

## Load cell

Measures the force applied to the specimen.

## Extensometer

Used to measures the elongation (increase in length) in the specimen.

## Results

Results are converted to engineering stress and strain, and plotted.

## Elastic deformation (elasticity)

Temporary. Returns to its original shape when load is released.

### Linear elastic materials

When elastic deformation portion in stress-strain diagram is straight line.

#### Young's modulus (aka Elastic modulus)

Can be thought of as **stiffness**.

```math
\text{Young's modulus }E=\frac{\text{stress}}{\text{strain}}=\frac{\sigma}{\epsilon}
```

### Nonlinear elastic materials

When elastic deformation portion in stress-strain diagram is not straight line.

#### Secant modulus

Equal to the tangent of the line connecting a point in the stress-strain diagram
and the origin.

#### Tangent modulus

Equal to the instantaneous tangent on a point in the stress-strain diagram.

## Poisson's ratio

A tensile stress in a particular direction causes extension (say $\epsilon_Z$)
in that direction and contraction in other two directions ($\epsilon_X$ and
$\epsilon_Y$).

```math
v=-\frac{\epsilon_x}{\epsilon_z}=-\frac{\epsilon_y}{\epsilon_z}
```

For metals (if not given) can be taken as $v=0.34$. Mathematically maximum of
poisson's ratio is $0.5$. Rubber has the maximum poisson's ratio (0.5).

### Isotropic materials

Homogenous materials. $\epsilon_x=\epsilon_y$. $ $

## Plastic deformation (plasticity)

When stress is not proportional to strain.

Deformation is permanent or non-recoverable or **plastic**.

## Yield strength

Stress at point P. Point P is where plastic deformation starts (in stress-strain
diagram). Denoted by $\sigma_y$. Used when the strength of a metal is cited for
design purposes. $ $

Point P is very difficult to find practically. Practically, **0.2% proof
stress** is used as the yield strength.

### 0.2% proof stress

A straight line is constructed parallel to the elastic portion of the
stress-strain curve at some specified strain offset, usually 0.002. The stress
corresponding to the intersection of this line and the σ-ε curve is defined as
the yield strength σY.

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

## Tensile tests for brittle material

The σ-ε behavior of brittle materials cannot be assessed by a tensile test
because:

- Difficult to prepare test specimens
- Difficult to grip brittle materials without fracturing them

:::note[For brittle materials]

Fracture strength is normally specified for engineering design purposes. Tensile
strength is calculated from its **modulus of rupture (MOR)** or **flexural
strength** value.

$\text{Tensile strength} \times 1.3 = \text{MOR}$

:::

## Necking

All deformation up to the maximum point is uniform throughout the specimen.

At this maximum stress, a neck begins to form – known as necking. All subsequent
deformation is confined to this neck.

## Fracture

Fracture occurs at the neck. Fracture surface gives cup & cone appearance.
