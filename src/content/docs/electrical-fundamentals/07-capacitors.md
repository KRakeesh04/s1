---
title: Capacitors
slug: electrical-fundamentals/capacitors
sidebar:
  order: 7
---

Made of two conductive plates separated by an insulating
([dielectric](/properties-of-materials/electrical-properties/dielectric-behavior/))
layer.

Capacitance ($ C $), in terms of physical dimensions: $ $

```math
C = \frac{\epsilon A}{d}
```

Here:

- $ d $: distance between the plates
- $ A $: area of a plate

In an ideal capacitor, the charge imbalance $ Q $ is proportional to the voltage
$ V $ across the plates.

$ Q = CV $

## v and i

As $ C $ is constant, current $ i $ passing through the capacitor and the
voltage $ v $ across the capacitor are related by:

```math
i = C \frac{\text{d}v}{\text{d}t}
```

## Energy stored

Suppose voltage across an initially uncharged capacitor rises from $0$ to $ V $
during a time period of $ t $.

```math
e = \int_{0}^{t} p\,dt = \int_{0}^{t} vi\,dt = C \int_{0}^{v} v\,dv
```

```math
E = \frac{1}{2}CV^2
```
