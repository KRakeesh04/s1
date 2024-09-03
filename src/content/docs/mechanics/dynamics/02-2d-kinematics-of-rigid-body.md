---
title: 2D kinematics of a rigid body
slug: mechanics/dynamics/2d-kinematics-of-rigid-body
sidebar:
  order: 2
---

### Rigid body

A solid body that doesn't deforms.

### Degrees of freedom

In the motion of a rigid body in 2D kinematics, there are 3 degrees of freedom.

- Movement along $x$ direction
- Movement along $y$ direction
- Rotation about $z$ direction

In 3D, there are 6 degrees of freedom: movement and rotation along each
direction.

### Translation

Movement that changes the position of an object. Translation can be done through
a rectilinear or curvilinear path.

### Rotation

Circular movement of an object about a fixed axis.

## General 2D motion

![General 2D motion](/public/mechanics/dynamics/general-2d-motion.jpg)

```math
v_B=v_A+\dot{\theta}\times r_{B/A}
```

```math
a_B=a_A+\ddot{\theta}\times r_{B/A}+\dot{\theta}\times (\dot{\theta}\times r_{B/A})
```

### Instantaneous centre of rotation

The point that has zero velocity at a particular instant of time. This point
might be changing throughout the motion. Denoted by $I$.

It can be imagined that the object is momentarily having a pure rotation about
this centre $I$. $ $

![finding instantaneous centre of rotation](/mechanics/dynamics/finding-instantaneous-centre-of-rotation.jpg)

$I$ can be found by drawing a line perpendicular at the velocity vectors at 2
different points and finding their intersection point. $ $

### Centrode

The locus of instantaneous centres during the motion.
