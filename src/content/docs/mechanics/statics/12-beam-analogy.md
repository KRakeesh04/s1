---
title: Beam Analogy (Approximate) method
slug: mechanics/statics/beam-analogy
sidebar:
  order: 12
---

We find the internal forces assuming the elongated truss is a beam.

:::note[For a simply supported beam]

- Maximum bending moment is at mid-span: $M_{\text{max}}=\frac{wL^2}{8}$
- Maximum shear force is at the supports: $\frac{wL}{2}$

:::

![Beam analogy for a truss](/mechanics/beam-analogy.jpg)

Here:

- Chord members - horizontal members
- Web members - diagonal members
- $d$ - truss depth

In the truss,

- Bending moment is carried by chord members.  
  $\text{Bending moment}=F_{\text{chord}}\times d$
- Shear force is carried by vertical component of web member force

:::note[Pratt & Howe type trusses]

Above-mentioned truss is **Pratt type**. (_is that correct?_)

**Howe type truss** is a similar structure.

![Howe type truss](/mechanics/howe-type-truss.jpg)

In pratt type truss, internal force in web members are tensile. In howe type
trusses, internal force in web members are compressive. Usually **Pratt type**
is cost-efficient. To make sure a howe type truss is strong enough like pratt
type, web members must be shorter and thicker.

:::
