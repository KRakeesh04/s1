---
title: Beams
slug: mechanics/statics/beams
sidebar:
  order: 8
---

![Beam](/mechanics/beam.jpg)

- long ($L >> B,D$)
- axis of the beam is straight
- constant cross-section throughout its length

## Classified by supporting conditions

First 3 are the mandatory ones.

| Type                      | Image                                                                  |
| ------------------------- | ---------------------------------------------------------------------- |
| Simply supported beam     | ![Simply supported beam](/mechanics/simply-supported-beam.jpg)         |
| Cantilevered beam         | ![Cantilevered beam](/mechanics/cantilevered-beam.jpg)                 |
| Overhanging beam          | ![Overhanging beam](/mechanics/overhanging-beam.jpg)                   |
| Propped cantilevered beam | ![Propped cantilevered beam](/mechanics/propped-cantilevered-beam.jpg) |
| Continuous beam           | ![Continuous beam](/mechanics/continuous-beam.jpg)                     |
| Fixed beam                | ![Fixed beam](/mechanics/fixed-beam.jpg)                               |

## At a section

![At a section](/mechanics/at-a-section.jpg)

- $ P $ - Normal force / Axial force
- $ S_y, S_y $ - Shear forces along $y$ and $z$ axis
- $ M_x $ - Twisting moment / Torque
- $ M_y, M_z $ - Bending moments about $y$ and $z$ axis

## Degress of freedom

A plane member have 3 degress of freedom. Any of the 3 can be restrained.

- Displacement in x-direction
- Displacement in y-direction
- Rotation about z-direction

## SFD & BMD

### Sign convention

- Bending moment
  - Hogging (curves upwards) is **(+)ve**
  - Sagging (curves downwards) is **(-)ve**
- Shear force
  - Clockwise shear is **(+)ve**.
  - Counterclockwise shear is **(-)ve**.

:::note

A member is in pure bending when shear force is 0 and bending moment is a
constant in a part of a beam.

:::

## Distributed load, shear force & bending moment

When a beam is under a distributed load of $w=f(x)$ per unit length. $ $

```math
\frac{\text{d}S}{\text{d}x}=-w
```

```math
\frac{\text{d}M}{\text{d}x}=-S
\;;
\frac{\text{d}^2M}{\text{d}x^2}=w
```
