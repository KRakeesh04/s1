---
title: Carbon Nanotubes
slug: properties-of-materials/nanotechnology/carbon-nanotubes
sidebar:
  order: 3
---

A rolled up sheet of graphene.

Properties:

- Extraordinary electrical and heat conductivity
- High mechanical strength

## Classifications

### Based on structure

1. Single wall carbon nanotubes (SWNT)
2. Multi-walled carbon nanotubes (MWNT)  
   Similar to graphite but rolled up as a set of sheets.

### Based on Chirality

Chirality means the way that graphene sheet is oriented with respect to the axis
of carbon nanotube.

![CNT classification based on chirality](/props/nano/cnt-chirality-types.jpg)

### Achiral

Have mirror planes. Has 2 types.

1. Armchair
2. Zigzag

#### Armchair

![Armchair structure of CNT](/props/nano/armchair-structure.jpg)

Circumference has a repeating armchair structure.

#### Zigzag

![Zigzag structure of CNT](/props/nano/zigzag-structure.jpg)

Circumference has a repeating zigzag structure.

### Chiral

No mirror planes. Definition for the chiral type is later explained.

## Definitions

### Equivalent Atoms

Equivalent atoms means the atoms having the same surrounding.

![Equivalent atoms](/props/nano/equivalent-atoms.jpg)

In graphene, next-near neighbours are equivalent atoms.

When a graphene sheet is rolled to create a CNT, equivalent atoms must be
connected.

### Primitive Vectors

Vectors used to describe a unit cell.

For graphene, any 2 adjacent sides of the unit cell (rhombus) can be used as the
primitive vectors.

### Lattice Vectors

Any vector connecting 2 equivalent atoms. A lattice vector can be expressed in
terms of primitive vectors.

### Chiral Vector

The vector that constructs the circumference of a CNT. Also called as
Circumferential vector.

### (n,m) notation

If the chiral vector can be expressed as $na_1 + ma_2$ where $a_1,a_2$ are the
primitive vectors, then the notation for the nanotube is $(n,m)$

- $n=0 \lor m =0$: zigzag tube
- $n=m$: armchair tube
- Otherwise: chiral tube

### Chiral Angle

Angle between the chiral vector and nearest zigzag angle.

For a $(n,m)$ tube: $ $

```math
\theta=\tan^{-1} \frac{\sqrt{3}m}{2n+m}
```

- $\theta=30°$: armchair tube
- $\theta=0°$: zigzag tube
- $0°<\theta<30°$: chiral tube

### Diameter of CNT

For a $(n,m)$ tube, the chiral vector's length is given by: $ $

```math
|\text{CH}|=a\sqrt{n^2+m^2+nm}
```

Here $a$ is the bond length of C-C. $ $

And the diameter of the CNT can be expressed by:

```math
D=\frac{|\text{CH}|}{\pi}=\frac{a}{\pi}\sqrt{n^2+m^2+nm}
```
