---
title: Refinements
slug: maths/riemann-integration/refinements
sidebar:
  order: 5
---

$Q$ is called a refinement of $P \iff $ if $P$ and $Q$ are partitions of $[a,b]$
and $P\subseteq Q$.

When $Q$ is a refinement of $P$:

```math
L(f;P)
\le
L(f;Q)
\le
U(f;Q)
\le
U(f;P)
```

:::note

If $P_1$ and $P_2$ are partitions of $[a,b]$, then $Q=P_1\cup P_2$ is a
refinement of both $P_1$ and $P_2$. In that case:

```math
L(f;P_1)
\le
L(f;Q)
\le
U(f;Q)
\le
U(f;P_2)
```

:::
