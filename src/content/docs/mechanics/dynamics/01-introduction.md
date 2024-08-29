---
title: Introduction to Dynamics
slug: mechanics/dynamics/introduction
sidebar:
  order: 1
---

:::caution[Todo]

This page is not very well organized yet. Let me know how it can be improved.

:::

A branch of mechanics, which deals with motion of bodies.

2 parts:

- **Kinematics**: the study of geometric aspects of motion (not referencing the
  forces)
- **Kinetics**: the analysis of the forces that cause the motion

## Kinematics of a particle

A particle has a mass and negligible size.

:::note

When bodies of finite size is of interest, the body might be considered as
particles **provided** motion of the body is characterized by motion of its
center of mass and any rotation of the body is neglected.

:::

### Rectilinear motion

When the motion of a particle is along a straight line.

Suppose $x$ is the distance to the particle from a fixed point on its motion
path. $ $

- $\dot{x}$ is its instantaneous velocity.
- $\ddot{x}$ is its instantaneous acceleration.

### Curvilinear motion

When the motion of a particle is along a curve (and not a straight line).

Suppose $\overline{r}$ is the position vector of the particle from a fixed
point. $ $

- Instantaneous velocity $v=\frac{\text{d}r}{\text{d}t}$
- Instantaneous speed $|v|=\frac{\text{d}s}{\text{d}t}$
- Instantaneous acceleration $a=\frac{\text{d}v}{\text{d}t}$

### 2D motion of a particle

#### Rectangular form

:::caution[TODO]

Finish this section

:::

#### Polar form

![curvilinear-motion-polar.jpg](/mechanics/dynamics/curvilinear-motion-polar.jpg)

Velocities also have a transverse and radial components.

- Transverse component $v_\theta=\dot{\theta}\times r$
- Radial component $v_r=\dot{r}$

:::note

Right hand rule is used here to denote the direction of any rotary motions.

:::

![curvilinear-motion-polar-acceleration.jpg](/mechanics/dynamics/curvilinear-motion-polar-acceleration.jpg)

Acceleration also have a transverse and radial components.

- Transverse component
  - $a_\theta=r\ddot{\theta}+2\dot{\theta}\dot{r}$
  - In vector equation:
    $\underline{a_\theta} = \underline{\ddot{\theta}}\times \underline{r}+2(\underline{\dot{\theta}}\times \underline{\dot{\underline{r}}})$
- Radial component
  - $a_r=\ddot{r}-r\dot{\theta}^2$
  - $\underline{a_\theta} = \underline{\ddot{r}}+ \underline{\dot{\theta}}\times(\underline{\dot{\theta}}\times \underline{r})$

In the acceleration:

- **Coriolis' component of acceleration**: $2\dot{\theta}\dot{r}$
- **Centripetal component of acceleration**:
  $-r\dot{\theta}^2 = \underline{\dot{\theta}}\times(\underline{\dot{\theta}}\times\underline{r})$

### Effects of Coriolis' component

- Objects reflect to the right in the northern hemisphere
- Objects reflect to the left in the southern hemisphere
- Maximum deflections occur at the poles. No deflection at the equator.

### Unit vectors

Unit vectors in both transverse and radial directions are denoted by $e_\theta$
and $e_r$.

```math
\dot{e}_r=\dot{\theta}e_\theta\;\;\land\;\;
\dot{e}_\theta = -\dot{\theta}e_r
```

#### Velocity

```math
v=
\frac{\text{d}}{\text{d}t}(re_r) =
\dot{r}e_r + r\dot{e}_r =
\dot{r}e_r+
r\dot{\theta}e_\theta
```

#### Acceleration

```math
a=
\frac{\text{d}}{\text{d}t}
(r\dot{\theta}e_\theta)=
(\ddot{r}-r\dot{\theta}^2)e_r+
(r\ddot{\theta}+2\dot{\theta}\dot{r})e_\theta
```
