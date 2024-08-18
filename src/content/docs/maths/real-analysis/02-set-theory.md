---
title: Set theory
slug: maths/real-analysis/set-theory
sidebar:
  order: 2
---

Zermelo-Fraenkel set theory with axiom of Choice(ZFC):9 axioms all together is
being used here.

## Definitions

- $x \in A^\text{c} \iff x \not\in A$
- $x \in A\cup B \iff x \in A \lor x \in B$
- $x \in A\cap B \iff x \in A \land x \in B$
- $A \subset B = \forall x (x \in A \implies x \in B)$
- $A - B = A \cap B^\text{c}$
- $A = B \iff ((\forall z \in A \implies z \in B) \land (\forall z \in B \implies z \in A))$

## Required proofs

- $(A\cap B)^\text{c} = A^\text{c} \cup B^\text{c}$
- $(A\cup B)^\text{c} = A^\text{c} \cap B^\text{c}$
- $A \cap (B \cup C) = (A \cap B)\cup (A\cap C)$
- $A \cup (B \cap C) = (A \cup B)\cap (A\cup C)$
- $A \subset A\cup B$
- $A\cap B \subset A$
