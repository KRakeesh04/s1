---
title: Pumps
slug: fluid-mechanics/machinery/pumps
sidebar:
  order: 2
---

### Vane

A curved blade used in a pump.

### Impeller

Set of vanes attached to a disc or a cyllinder. Main rotating element in a pump.

In a pump, impeller is mounted on a shaft. The shaft is driven by an electric
motor or IC engine.

## Direction of the fluid flow

### Axial flow

Fluid enters and exits the impeller axially.

### Radial flow

Fluid enters the impeller axially. Leaves radially. Aka.
[centrifugal pumps](/fluid-mechanics/machinery/centrifugal-pumps).

### Mixed flow

Fluid enters the impeller axially. Leaves in both axial and radial directions.

:::note

For s1, only centrifugal pumps are studied.

:::

## Parameters

### Head provided

The head provided by a pump depends on the flow rate.

```math
H=f(Q)
```

Here:

- $H$ - provided head
- $Q$ - flow rate

For a given pump running at a given speed, there is a unique variation of $H$
and $Q$.

### Power input

Denoted by $P_i$. Varies with $Q$.

### Efficiency

Denoted by $\mu$. Varies with $Q$.

```math
\mu = \frac{P_o}{P_i}
```

:::note

```math
\text{Energy per unit volume} = \frac{P_{i_A}}{Q}
```

:::

All these parameters, plotted vs $Q$, is known as **performance characteristic**
of the pump. Will be given by the manufacturer. Can be found by laboratory
testing. $ $

## In a pipeline system

```math
H=H_0 + KQ^2
```

$H$ is the head required (or received) to create the flow rate $Q$ in the
pipeline system. The above equation is known as **system characteristic** or
**system load curve**.

Here $K$ is the loss coefficient and is given by: $ $

```math
K = \frac{8}{\pi^2gD^4}\bigg(K_L+\frac{\lambda L}{D}\bigg)
```

:::note

Working state of a pipeline system is given by the intersection of system
characteristic and performance characteristic (of the pump) curves.

:::
