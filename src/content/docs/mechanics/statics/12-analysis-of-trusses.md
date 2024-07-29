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

TODO

## Method of Sections

### Principle

If a structure is in stable equilibrium, a section of the structure must also be
in stable equilibrium.

### Method

- Decide on which member's internal force must be calculated.
- Break **3 or less** members including the target member.
- Use equilibrium of RHS or LHS section to find the internal forces.
