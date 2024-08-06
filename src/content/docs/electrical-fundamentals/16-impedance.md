---
title: Impedance & Admittance
slug: electrical-fundamentals/impedance
sidebar:
  order: 16
---

```math
Z=\frac{V}{I}=R+jX
```

Here:

- $R$: Resistance
- $X$: Reactance

## Admittance (Y)

Inverse of impedance.

```math
Y=\frac{1}{Z}=\frac{I}{V}=G+jB
```

Here:

- $G$: Conductance
- $B$: Susceptance

From the definitions:

```math
G=\frac{R}{R^2+X^2}
\;\land
B=-\frac{X}{R^2+X^2}
```

## For simple circuit elements

### Resistor

Let $i=I_m\sin{(\omega t + \phi_0)}$ is applied across a resistor with
resistance $R$. From Ohm's law:

$v=RI_m\sin{(\omega t + \phi_0)}$

:::note

No changes in frequency, phase angle. $v$ is in phase with $i$. $R$ doesn't have
reactance.

:::

### Inductor

Let $i=I_m\sin{(\omega t + \phi_0)}$ is applied across an inductor with
inductance $L$.

$v=L\omega I_m\sin{(\omega t + (\phi_0+\frac{\pi}{2}))}$

Reactance of the inductor is $X_L=L\omega$. $ $

:::note

$v$ leads $i$ by $\frac{\pi}{2}$. No changes in frequency.

:::

### Capacitor

Let $i=I_m\sin{(\omega t + \phi_0)}$ is applied across an capacitor with
capacitance $c$.

```math
v=\frac{I_m}{c\omega}
\sin{(\omega t + (\phi_0 - \frac{\pi}{2}))}
```

Reactance of the capacitor is $X_c=-\frac{1}{c\omega}$. $ $

:::note

$v$ lags $i$ by $\frac{\pi}{2}$. No changes in frequency.

:::

### Real Inductor

![Real Inductor](/electrical/real-inductor.jpg)

Take $\overline{I}$ as the reference. We get: $ $

```math
\overline{V}=
\overline{I}(R+j\omega L)
```

From here $overline{Z}$ can be written (in cartesian or polar form):

```math
\overline{Z}=R+j\omega L=\lvert \overline{Z}\rvert\angle\phi
```
