---
title: Generalized MVT for Riemann Integrals
slug: maths/real-analysis/generalized-mvt-for-riemann-integrals
sidebar:
  order: 19
---

Let $f,g$ be continuous on $[a,b]$ ($\implies f,g$ are integrable), and $g$ does
not change sign on $(a,b)$. Then $\exists \zeta \in (a,b)$ such that:

```math
\int_a^b {f(x)g(x)\text{d}x}=
f(\zeta)\int_a^b{g(x)\text{d}x}
```

:::note[Proof Hint]

- Use
  [Extreme value theorem](/maths/real-analysis/theorems-related-to-continuity/#extreme-value-theorem)
  for $f$
- Multiply by $g(x)$. Then integrate. Then divide by $\int_a^b{g(x)}$.
- Use intermediate value theorem to find $f(\zeta)$

:::
