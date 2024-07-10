---
title: Real Numbers
---

## Sets of numbers

- Positive integers: $ \mathbb{Z}^{+} = \Set{1,2,3,4,...} $. $ $
- Natural integers: $ \mathbb{N} = \Set{0,1,2,3,4,...} $. $ $
- Negative integers: $ \mathbb{Z}^{-} = \Set{-1,-2,-3,-4,...} $. $ $
- Integers: $ \mathbb{Z} = \mathbb{Z}^{-} \cup \Set{0} \cup \mathbb{Z}^{+}
  $. $
  $
- Rational numbers: $ \mathbb{Q} = \Set{\frac{p}{q} | q \not = 0 \land p, q \in
  \mathbb{Z}} $.
  $ $
- Irrational numbers: limits of sequences of rational numbers (which are not
  rational numbers)
- Real numbers: $ \mathbb{R} = \mathbb{Q}^{c} \cup \mathbb{Q} $. $ $

## Axiomatic approach

$ \mathbb{R} \not = \emptyset $ with two binary operations $ + $ and $ \cdot $
satisfying the following properties

1. Closed under addition: $ \forall a, b \in \mathbb{R} ; a + b \in \mathbb{R} $
2. Commutative: $ \forall a, b \in \mathbb{R}; a + b = b + a $
3. Associative: $ \forall a, b, c \in \mathbb{R}; (a + b) + c = a + (b + c) $
4. Additive identity: $ \exists 0 \in \mathbb{R}\, \forall a \in \mathbb{R}; a +
   0 = 0 + a = a $
5. Additive inverse: $ \forall a \in \mathbb{R}\, \exists (-a); a + (-a) =
   (-a) + a = 0 $
6. Closed under multiplication: $ \forall a, b \in \mathbb{R} ; a \cdot b \in
   \mathbb{R} $
7. Commutative: $ \forall a, b \in \mathbb{R}; a \cdot b = b \cdot a $
8. Associative: $ \forall a, b, c \in \mathbb{R}; (a \cdot b) \cdot c = a \cdot
   (b \cdot c) $
9. Multiplicative identity: $ \exists 1 \in \mathbb{R}\, \forall a \in
   \mathbb{R}; a \cdot 1 = 1 \cdot a = a $
10. Multiplicative inverse: $ \forall a \in \mathbb{R}-\Set{0}\, \exists a^{-};
    a \cdot a^{-} = a^{-} \cdot a = 1 $
11. Multiplication is distributive over addition: $ a \cdot (b + c) = a \cdot
    b + a \cdot c $

:::note[Field]

Any set satisfying the above axioms with two binary operations (commonly $ + $
and $ \cdot $) is called a **field**. Written as $ (\mathbb{R}, +, \cdot)
\;\text{is a Field} $. But $ (\mathbb{R}, \cdot, +)\;\text{is not a field} $.
:::

### Required proofs

The below mentioned propositions can and should be proven using the
above-mentioned axioms. $ a, b, c \in \mathbb{R} $. $ $

- $ a\cdot0 = 0 $
- $ 1\not = 0 $
- Additive identity ($ 0 $) is unique
- Multiplicative identity ($ 1 $) is unique
- Additive inverse ($ -a $) is unique is unique for a given $ a $
- Multiplicative inverse ($ a^{-1} $) is unique for a given $ a $
- $ a + b = 0 \implies b = -a $
- $ a + c = b + c \implies a = b $
- $ -(a + b) = (-a) + (-b) $
- $ -(-a) = a $
- $ ac = bc \implies a = b $
- $ ab = 0 \implies a = 0 \lor b = 0 $
- $ −(ab) = (−a)b = a(−b) $
- $ (−a)(-b) = ab $
- $ a \not = 0 \implies {(a^{-1})}^{-1} = a $
- $ a, b \not = 0 \implies {ab}^{-1} = a^{-1}b^{-1} $

## Order Axioms of $ \mathbb{R} $

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
