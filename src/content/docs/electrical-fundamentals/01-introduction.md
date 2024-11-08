---
title: Introduction to Electrical Fundamentals
slug: electrical-fundamentals/introduction
sidebar:
  label: Introduction
  order: 1
prev: false
next: false
---

Be sure to revise the Electricity unit of G.C.E. (A/L) Physics.

## Charge

- measured in Coulomb ($ C $) = $ 6.25 × 10^{18} $ number of electrons
- quantized
- conserved

Time invariant charge is denoted as $ Q
$. And time varying charge is denoted as
$ q $.

## Current

Amount of charges (in $ C
$) flowing through a point in unit time. Conventional
current (opposite to electron flow) flows from positive to negative potentials.
$
$

$ I = \frac{\text{d}Q}{\text{d}t} $

Time invariant current (DC) is denoted as $ I
$. And time varying current (AC) is denoted as
$ i $.

## Voltage

Voltage at a point is the work that must be done against the electric field to
move a unit positive charge from infinity to that point.

$1$ volt is the potential difference between $2$ points when $1$ joule of energy
is used to move $1$ coulomb of charge from one point to the other.

$ V = \frac{E}{Q} $

Time invariant voltage is denoted as $ V
$. And time varying voltage is denoted as
$ v $.

Voltage difference is the work that must be done against the electric field to
move a unit positive charge from one point to another.

```math
V_{AB} = V_A - V_B
```

## Electric Circuit

![Different ways to depict circuits](/electrical/types-of-circuits.jpg)

Types of circuits

- Closed circuit - the electricity flows
- Open circuit - the electricity doesn't flow. current = $0$. $\infty$
  resistance.
- Short circuit - very large current. $0$ resistance.

## Power

```math

p=
\frac{\text{d}w}{\text{d}t}=
\frac{\text{d}w}{\text{d}q} \frac{\text{d}q}{\text{d}t}
= vi
```

## Total Work

```math
w = \int_{t_0}^{t} {p\,\text{d}t} = \int_{t_0}^{t} {vi\,\text{d}t}
```

#### When v and i are constant

```math
w = vi \int_{t_0}^{t} {\text{d}t} = vi(t - t_0)
```

## Electrical Load

Something that consumes electrical energy.

### Linear loads

Loads that can be expressed using a combination of resistors, capacitors and
inductors only.

:::note

If a AC sinusoidal voltage is applied across a load, current through the load
will also be sinusoidal **iff** the load is linear.

:::
