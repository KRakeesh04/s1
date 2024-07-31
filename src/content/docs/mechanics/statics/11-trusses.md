---
title: Trusses
slug: mechanics/statics/trusses
sidebar:
  order: 11
---

Also known as Ties-Struts model.

## Definition

An assembly of members used to span long distances. Idealized as

- Connected by **frictionless** [pin joints](../structural-elements/#pin-joint)
  at their ends
- Developing axial forces

## Types

2 types

- Plane truss (2D)
- Space truss (3D)

A truss requires 3 external reactions for equilibrium.

Predominant force is axial force.

## Advantages of truss

- High/length span
- Material efficiency

## Triangulation

- Start with a triangle (3 bars and 3 joints)
- Add 2 more bars and a joint repeatedly to create a truss

This type of truss is a **simple truss**.

## Simple (Closed) Truss

When a truss is pinned only made of bars and joints

## Open Truss

When a truss is pinned directly to a foundation. It has 1 member & 2 free joints
less than a closed truss.

## Stability of trusses

When a truss is:

- unstable: it's called a mechanism
- stable: it's called a structure

### Stable truss

When the shape cannot be altered, the structure is **internally stable**.

#### Stable & determinate (simply stiff)

**Determinate** means internal forces can be determined by laws of statics
alone.

#### Stable & indeterminate

**Indeterminate** means laws of statics alone are not sufficient to determine
forces; relative stiffness of members will influence the solution (Indeterminate
trusses are safer)

### Unstable truss

When the shape cannot be altered, the truss is called a mechanism.

### Necessary condition for a 2D simple (closed) truss

$m=2j-3$ is a necessary but not sufficient condition being simply stiff.$ $

- $m<2j-3$ - truss is unstable
- $m=2j-3$ - truss is determinate if stable
- $m>2j-3$ - truss is indeterminate if stable

### Necessary condition for a 2D open truss

$m=2j$ is a necessary but not sufficient condition being simply stiff.$ $

- $m<2j$ - truss is unstable
- $m=2j$ - truss is determinate if stable
- $m>2j$ - truss is indeterminate if stable

### Necessary condition for a 3D simple (closed) truss

$m=3j-6$ is a necessary but not sufficient condition for being simply stiff.$ $

### Necessary condition for a 3D open truss

$m=3j$ is a necessary but not sufficient condition for being simply stiff.$ $
