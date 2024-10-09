---
title: Improper Riemann Integrals
slug: maths/riemann-integration/improper-riemann-integrals
sidebar:
  order: 16
---

Riemann integral is defined only for **bounded** functions defined on a set of
**compact** intervals.

## Type 1

A function that is **not** integrable at one endpoint of the interval.

Suppose $f:(a,b]\to\mathbb{R}$ is integrable on $[c,b]\;\forall c\in (a,b)$.

```math
\int_a^b f = \lim_\limits{\epsilon \to 0}\; \int_{a+\epsilon}^b f
```

Can be similarly defined on the other endpoint.

The above integral converges **iff** the limit exists and finite. Otherwise
diverges.
