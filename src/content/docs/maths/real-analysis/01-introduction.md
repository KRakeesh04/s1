---
title: Introduction to Real Analysis
slug: maths/real-analysis/introduction
sidebar:
  order: 1
---

Let's take $ a \to b $. $ $

1. Contrapositive or transposition: $ \sim b \to\,\, \sim a $. This is
   equivalent to the original.
2. Inverse: $ \sim a \to\,\,\sim b $. Does not depend on the original.
3. Converse: $ b \to a $. Does not depend on the original.

$ a \to b \,\equiv\,\,\sim a \lor b \,\equiv\,\, \sim b \to\,\,\sim a $

## Methods of proofs

1. Just proof what should be proven
2. Prove the contrapositive.
3. Proof by contradiction

### Proof by contradiction

Let's say we have to prove: $ a \implies b $. We will prove $ a\,\land \sim b $
to be false. Then by proof by contradiction, we can prove $ a \implies b $.

#### Proof of proof by contradiction

$ a\,\land \sim b = F $

$ \sim{(a\,\land \sim b)} =\,\, \sim F $

$ \sim a \lor b = T $

$ a \to b = T $

$ a \implies b $
