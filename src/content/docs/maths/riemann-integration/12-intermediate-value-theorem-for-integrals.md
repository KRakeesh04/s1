---
title: Intermediate Value Theorem for Integrals
slug: maths/riemann-integration/intermediate-value-theorem-for-integrals
sidebar:
  order: 12
---

Suppose $f$ is a continuous function on $[a,b]$. Then $\exists x \in (a,b)$:

```math
f(x)=\frac{1}{b-a}\int_a^b f
```

:::note[Proof Hint]

Suppose $f_{\text{max}} = M = f(x_0)$ and $f_\text{min} = m=f(y_0)$.

When $M=m$: $f$ is a constant function. Proof is trivial.

Otherwise:

```math
m(b-a) \le \int_a^b f \le M(b-a)
```

Then there exists $x \in (x_0, y_0)$. $ $

:::
