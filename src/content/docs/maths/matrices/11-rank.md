---
title: Rank
slug: maths/matrices/rank
sidebar:
  order: 11
---

Number of non-zero rows of row echelon form of a matrix $A$. Denoted by
$\text{Rank }A$.

:::note

$\text{Rank }A \le \text{Rank }(A|B)$ is always true. $ $

:::

## Relation with non-homogenous system of solutions

Consider the system: $A_{n\times n}X_{n\times 1}=B{n\times 1}$. $ $

- $|A| \neq 0 \iff \text{Rank }A = \text{Rank }(A|B)=n \iff \text{unique solution exists}$
- $|A|=0 \implies \text{no solution} \lor \text{infinitely many solutions}$
- $\text{Rank }A <\text{Rank }(A|B) \implies \text{no solutions}$
- $\text{Rank }A =\text{Rank }(A|B) <n \implies \text{infinitely many solutions}$
