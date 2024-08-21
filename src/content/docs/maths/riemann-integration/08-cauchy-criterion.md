---
title: Cauchy Criterion
slug: maths/riemann-integration/cauchy-criterion
sidebar:
  order: 8
---

## Theorem

A bounded function $f:[a, b] \rightarrow R$ is Riemann integrable **iff** for
every $\epsilon > 0$ there exists a partition $P_\epsilon$ of $[a,b]$, which may
depend on $\epsilon$, such that:

```math
U(f, Pϵ) − L(f, Pϵ) ≤ \epsilon
```

:::note[Proof Hint]

- To prove $\implies$: consider $L(f)-\frac{\epsilon}{2}$ and
  $U(f)+\frac{\epsilon}{2}$
- To prove $\impliedby$: consider $L(f;P)<L(f) \land U(f)<U(f;P)$

:::
