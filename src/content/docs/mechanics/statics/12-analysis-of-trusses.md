---
title: Analysis of Trusses
slug: mechanics/statics/analysis-of-trusses
sidebar:
  order: 12
---

Deviations from the ideal in real trusses

- Loads are not applied only at joints; hence there is bending in members
- Joints are not perfectly pinned, so moments can be developed at joints

## Method of Joints

### Principle

Since the truss is in equilibrium, each pin joint must be in equilibrium.

:::note

2 equilibrium equations can be written at each joint – vertical & horizontal

:::

### Sign convention

Tensile forces are positive. Compressive forces are negative.

### Method

- Find external reactions using equilibrium using equilibrium equations for the
  entire truss.
- Start with a joint with only 2 unknown joint forces.
- Mark the tensile forces (consider all forces are tensile) acting on the join.
- Find the unknown forces at the selected joint, using 2 equilibrium equations
  for the joint.
- Go to all other joints in turn and find forces in all the members.

### Special cases

| Case                                                | Description                                                    |
| --------------------------------------------------- | -------------------------------------------------------------- |
| ![a](/mechanics/joints-under-special-loading/a.jpg) | $F_{\text{AX}}=F_{\text{XB}}\land F_{\text{DX}}=F_{\text{XC}}$ |
| ![b](/mechanics/joints-under-special-loading/b.jpg) | $F_{\text{AX}}=F_{\text{XB}}\land F_{\text{DX}}=F_{\text{XC}}$ |
| ![c](/mechanics/joints-under-special-loading/c.jpg) | $F_{\text{XB}}=0\land F_{\text{DX}}=F_{XC}$                    |
| ![d](/mechanics/joints-under-special-loading/d.jpg) | $F_{\text{DX}}=F_{\text{XC}}$                                  |
| ![e](/mechanics/joints-under-special-loading/e.jpg) | $F_{\text{DX}}=F_{\text{XC}}=0$                                |

## Method of Sections

### Principle

Since the truss is in equilibrium, each part of it must be in equilibrium in
stable equilibrium.

### Method

- Decide on which member's internal force must be calculated.
- Cut the truss **3 or less** members including the target member.
- Internal forces in cut members become external forces. Can be represented as
  tensile forces.
- Use equilibrium equations for RHS or LHS section to find the internal forces.