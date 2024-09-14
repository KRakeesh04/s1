---
title: Power and Power factor
slug: electrical-fundamentals/power-and-power-factor
sidebar:
  order: 14
---

- In a purely resistive AC circuit, the energy delivered by the source will be
  dissipated in the form of the heat by the resistance.
- In a purely capacitive or purely inductive circuit, all of the energy will be
  stored during one half of each cycle, and then returned to the source during
  the other half cycle – there will be no net conversion to heat.
- When there is both a resistive component and a reactive component, some energy
  will be stored, and some will be converted to heat during each cycle.

## Power equations

### Purely resistive circuit

Suppose a circuit with load $R$ resistance is supplied a voltage of
$v(t)=V_m\cos{\omega t}$.

Instantaneous power dissipated by the load is given by:

```math
p(t) = \frac{V_m^2}{R}\cos^2{(\omega t)}
```

Always: $p(t)\gt 0$. $ $

```math
\text{Average power} = \frac{1}{2}\text{Peak power}=\cfrac{V_m^2}{2R}
```

### Purely inductive circuit

Suppose a circuit with inductor $L$ is supplied a voltage of
$v(t)=V_m\cos{\omega t}$.

Instantaneous power dissipated by the load is given by:

```math
p(t) = \frac{V_m^2}{2\omega L}\sin{(2\omega t)}
```

### Purely capacitive circuit

Suppose a circuit with inductor $L$ is supplied a voltage of
$v(t)=V_m\cos{\omega t}$.

Instantaneous power dissipated by the load is given by:

```math
p(t) = -\frac{V_m^2 \omega C}{2}\sin{(2\omega t)}
```

### Power of a general load

Consider a general load with both resistive and reactive components. Depending
on how inductive or capacitive the reactive component, the phase shift between
voltage and current phasor lies between $90°$ and $−90°$.

Suppose the circuit is supplied a voltage of $v(t) = V_m\cos{(\omega t)}$. And
the current phasor shifts in $\theta$ phase angle.

```math
i(t) = I_m\cos{(\omega t - \theta)}
```

This ends up with:

```math
p(t) = \frac{1}{2}V_mI_m\bigg[\cos\theta+\cos\bigg(\omega t - \frac{\theta}{2}\bigg)\bigg]
```

#### Average of over 1 cycle

```math
P_\text{avg} =\frac{1}{T}\int_{t_0}^{t_0 + T} p(t)\,\text{d}t = V_{\text{rms}}I_{\text{rms}}\cos{\theta}
```

## Types of power

### Reactive Power

Power delivered to/from a pure energy storage element is known as reactive
power.

- Average power consumed by a pure energy storage element is zero.
- Current associated with it is **not** $0$. Transmission lines, transformers,
  fuses, etc. must all be designed to be capable of withstanding this current.
- Loads with energy storage elements will draw large currents and require heavy
  duty wiring even though little average power is consumed.
- In all electrical and electronic systems, it is the true power (the resistive
  power) that does the work, the reactive power simply shuttles back and forth
  between the source and the load.
- This means that the apparent power supplied is a combination of the true and
  the reactive power.

```math
Q_\text{reactive} = V_\text{rms}I_\text{rms}\sin\theta
```

### Active power

```math
P = V_{\text{rms}}I_{\text{rms}}\cos{\theta}
```

### Apparent power

```math
S = V_\text{rms}I_\text{rms} = \sqrt{P^2 + Q^2}
```

The apparent power is essentially the effective power that the source “sees”

:::note[The Beer Analogy]

- Beer - Active power  
  Liquid beer is useful power. The power that does the work.
- Foam - Reactive power  
  Wasted or lost power. The power that does the work.
- Mug - Apparent power  
  Demand power, that is being delivered by the utility.

:::

## Power factor

In the above equation of $P_\text{avg}$, the $\cos\theta$ is called the power
factor.

```math
\cos{\theta}=\frac{\text{Active power}}{\text{Apparent power}}
```

Power factor is:

- leading when $I$ leads $V$
- lagging when $I$ lags $V$

## Power triangle

![Power triangle](/electrical/power-triangle.jpg)

- Take $V$ phasor as the reference.
- Draw $V$ and $I$ phasors.
