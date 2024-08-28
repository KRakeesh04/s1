---
title: Solution of non-homogenous systems
slug: maths/algebra/matrices/non-homogenous-systems
sidebar:
  order: 12
---

## Method 1: Direct approach

Used when coefficient matrix $A$ is invertible. It means the system has a unique
set of solutions. $ $

```math
AX=B
\implies
X=A^{-1}B
```

## Method 2: Cramer's Rule

Let $AX=B$, where $A$ is the coefficient matrix and $X=(x_i)_{n\times 1}$.

```math
x_i=\frac{\lvert{A_i}\rvert}{\lvert{A}\rvert}
```

Where $A_i$ is the matrix obtained by replacing $i$th column in matrix $A$ by
$B$.

## Method 3: Reducing to Echelon Form

Start with $(A|B)$. Convert the $\text{LHS}$ to echelon form using elementary
row transformations. The solution can be found now. If a contradiction is
encountered while solving the equation, that means the system has no solutions.
