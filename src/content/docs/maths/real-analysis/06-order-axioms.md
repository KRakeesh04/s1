---
title: Order Axioms
---

## Order Axioms of $\mathbb{R}$

12. $ \forall a,b \in \mathbb{R} $ exactly one of these holds: $a > b$, $a = b$,
    $a<b$
13. $ \forall a,b,c \in \mathbb{R}; a<b \land b<c \implies a<c $
14. $ \forall a,b \in \mathbb{R}; a<b \implies a+c<b+c $
15. $ \forall a,b,c \in \mathbb{R}; a<b \land 0<c \implies ac<bc $

### Definitions

- $ a < b \equiv b > a $
- $ a <= b \equiv a<b\lor a=b$
- $ a\not =b\equiv a<b\lor a>b$
- $\lvert{x}\rvert=\begin{cases}x & \text{if } x \ge 0, \\-x & \text{if } x < 0\end{cases}$

### Required proofs

- $\forall a,b,c \in \mathbb{R}; a<b \land c<0 \implies ac>bc $
- $1 > 0$
- $-\lvert{a}\rvert\le a\le\lvert{a}\rvert$

### Triangular inequalities

```math
\lvert{a}\rvert
-
\lvert{b}\rvert
\le
\lvert{a+b}\rvert
\le
\lvert{a}\rvert
+
\lvert{b}\rvert
```

```math
\lvert{
\lvert{a}\rvert
-
\lvert{b}\rvert
}
\rvert
\le
\lvert{a+b}\rvert
```
