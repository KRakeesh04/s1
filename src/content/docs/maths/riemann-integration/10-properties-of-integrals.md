---
title: Properties of Integrals
slug: maths/riemann-integration/properties-of-integrals
sidebar:
  order: 10
---

### Notation

If $a<b$ and $f$ is integrable on $[a,b]$, then:

```math
\int_a^bf=-\int_b^af
```

## Properties

Suppose $f$ and $g$ are integrable on $[a,b]$.

### Addition

$f+g$ will be integrable on $[a,b]$.

```math
\int_a^b(f\pm g)=
\int_a^bf
\pm
\int_a^bg
```

### Constant multiplication

Suppose $k\in\mathbb{R}$. $kf$ will be integrable $[a,b]$.

```math
\int_a^bkf=k\int_a^bf
```

### Bounds

If $m\le f(x) \le M$ on $[a,b]$:

```math
m\le \int_a^bf \le M
```

If $f(x)\le g(x)$ on $[a,b]$:

```math
\int_a^bf \le \int_a^bg
```

### Modulus

$|f|$ will be integrable on $[a,b]$.

```math
\Bigg|\int_a^bf\Bigg|=\int_a^b|f|
```
