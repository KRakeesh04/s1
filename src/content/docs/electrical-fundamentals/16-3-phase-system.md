---
title: 3-Phased System
slug: electrical-fundamentals/3-phase-system
sidebar:
  order: 16
---

## Why 3-phase?

So that the current can be distributed into 3 wires instead of just 1. There is
a maximum limit of how much current a wire can carry.

## Balanced 3-phase

The phases are denoted by $\text{R},\text{Y},\text{B}$ in that order. $ $

### Power source

A 3-phase power source produce 3 phase voltages of equal rms value, but with
$120°$ phase difference. $ $

### Phasor diagram

![Balanced 3-phase system](/electrical/balanced-3-phase-ac.jpg)

### Phase voltage

Voltage between a phase wire and the neutral wire.

$V_{\text{RN}}$, $V_{\text{YN}}$, $V_{\text{BN}}$ are the phase voltages.

### Line-to-line voltage

Voltage between any 2 phase wires. Line-to-line voltages also have a $120°$
phase difference. $ $

$V_{\text{RY}}$, $V_{\text{YB}}$, $V_{\text{BR}}$ are the line-to-line voltages
or line voltages.

```math
\big|
V_{\text{BR}}
\big|
=
2 \times
\big|
V_{\text{BN}}
\big|
\cos(30°)
=
\sqrt{3}
\big|
V_{\text{BN}}
\big|
```

:::note

In a 3-phase system, line-to-line voltage is mentioned.

:::

:::note

Devices that have a 3-phase power input, doesn't require a neutral line.

:::

## Analysis

![Analysis of 3-phase circuit](/electrical/3-phase-circuit-analysis.jpg)

```math
I_N=E
\bigg[
\frac{1\angle 0°}{z_R}
+
\frac{1\angle -120°}{z_Y}
+
\frac{1\angle 120°}{z_B}
\bigg]
```

:::note

A balanced 3-phase circuit can be represented by a single-phase equivalent
circuit. The diagram showing the single-phase equivalent of the power system
using standard symbols.

:::
