---
title: Definitions in AC Theory
slug: electrical-fundamentals/definitions-in-ac-theory
sidebar:
  order: 14
---

Say $v$ is alternating as in $v=v_{m}sin(\omega{t}+\phi)$.

## Peak value

Maximum instantaneous value. $v_m$ in the example. $ $

## Peak-to-peak value

Maximum variation between maximum positive and negative instantaneous values.
$2v_m$ in the example. $ $

For a sinusoidal waveform, this is twice the peak value.

## Mean value

```math
v_{\text{mean}}=
\frac{1}{T}
\int_{T_0}^{T_0+T}{v(t)\text{d}t}
```

Here:

- $T_0$ is the starting time of a cycle
- $T$ is the periodic time

For any symmetric waveform, mean value is zero.

## Average value

Mean value of the rectified version of a waveform.

For symmetric waveforms, half-cycle mean value is taken as the average value.

```math
v_{\text{average}}=
\frac{1}{\frac{T}{2}}
\int_{T_0}^{T_0+\frac{T}{2}}{v(t)\,\text{d}t}
```

For sinusoidal waveforms,

```math
v_{\text{average}}
=
\frac{1}{\frac{T}{2}}
\int_{T_0}^{T_0+\frac{T}{2}}{v_{m}sin(\omega{t}+\phi)\,\text{d}t}
=
\frac{2}{\pi}v_m
=
0.637v_m
```

## Effective value or rms (root mean square) value

```math
v_{\text{rms}}=
\sqrt{
\frac{1}{T}
\int_{T_0}^{T_0+T}{v(t)^2\,\text{d}t}
}
```

For sinusoidal waveforms:

```math
v_{\text{rms}}=
v_m
\sqrt{
\frac{1}{T}
\int_{T_0}^{T_0+T}{sin^2{(\omega{t}+\phi)}\,\text{d}t}
}
=
\frac{v_m}{\sqrt{2}}
```

:::note

$i_{\text{rms}}$ is the equivalent current that dissipates same amount of power
across a resistor R in time T as $i(t)$. Similar for voltage.

:::

:::note

rms value is always used to express the magnitude of a time varying quantity.

:::

## Instantaneous power

$P=vi=iRi=i^2R$

## Form factor

```math
\text{Form factor}
=
\frac{\text{rms value}}{\text{average value}}
=
{\frac{v_m}{\sqrt{2}}}\times{\frac{2}{\pi{v_m}}}
=1.111
```

## Peak factor

```math
\text{Peak factor}
=\frac{\text{peak value}}{\text{rms value}}$
={v_m}\times{\frac{\sqrt{2}}{v_m}}
=1.412
```
