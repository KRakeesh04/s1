---
title: Real Numbers
---

## Sets of numbers

- Positive integers: $ \Z^{+} = \Set{1,2,3,4,...} $. $ $
- Natural integers: $ \N = \Set{0,1,2,3,4,...} $. $ $
- Negative integers: $ \Z^{-} = \Set{-1,-2,-3,-4,...} $. $ $
- Integers: $ \Z = \Z^{-} \cup \Set{0} \cup \Z^{+} $. $ $
- Rational numbers: $ \mathbb{Q} = \Set{\frac{p}{q} | q \not = 0 \land p, q \in
  \Z} $.
  $ $
- Irrational numbers: limits of sequences of rational numbers (which are not
  rational numbers)
- Real numbers: $ \reals = \mathbb{Q}^{c} \cup \mathbb{Q} $. $ $

## Axiomatic approach

$ \reals \not = \empty $ with two binary operations $ + $ and $ \cdot $
satisfying the following properties

1. Closed under addition: $ \forall a, b \in \reals ; a + b \in \reals $
2. Commutative: $ \forall a, b \in \reals; a + b = b + a $
3. Associative: $ \forall a, b, c \in \reals; (a + b) + c = a + (b + c) $
4. Additive identity: $ \exists 0 \in \reals\, \forall a \in \reals; a + 0 = 0 +
   a = a $
5. Additive inverse: $ \forall a \in \reals\, \exists (-a); a + (-a) = (-a) + a
   = 0 $
6. Closed under multiplication: $ \forall a, b \in \reals ; a \cdot b \in \reals
   $
7. Commutative: $ \forall a, b \in \reals; a \cdot b = b \cdot a $
8. Associative: $ \forall a, b, c \in \reals; (a \cdot b) \cdot c = a \cdot (b
   \cdot c) $
9. Multiplicative identity: $ \exists 1 \in \reals\, \forall a \in \reals; a
   \cdot 1 = 1 \cdot a = a $
10. Multiplicative inverse: $ \forall a \in \reals-\Set{0}\, \exists a^{-}; a
    \cdot a^{-} = a^{-} \cdot a = 1 $
11. Multiplication is distributive over addition: $ a \cdot (b + c) = a \cdot
    b + a \cdot c $

:::note[Field]

Any set satisfying the above axioms with two binary operations (commonly $ + $
and $ \cdot $) is called a **field**.

:::

### Required proofs

The below mentioned propositions can and should be proven using the
above-mentioned axioms. $ a, b, c \in \reals $. $ $

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
