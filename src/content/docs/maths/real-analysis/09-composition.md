---
title: Composition
slug: maths/real-analysis/composition
sidebar:
  order: 9
---

## Composition of relations

Let $R:A\rightarrow{B}$ and $S:B\rightarrow{C}$ are 2 relations.  
Say $ran(R)=preran(S)=D$.

Composition of the 2 relations is written as:

```math
S\circ{R}=\set{(a,c)\,|\,(a,b)\in{R},\,(b,c)\in{S},\,b\in{D}}
```

## Composition of functions

Let $f:A\rightarrow{B}$ and is [onto](/maths/real-analysis/relations/#onto) and
$S:B\rightarrow{C}$ are 2 functions.

```math
g\circ{f}=\set{(x,z)\,|\,(x,y)\in{f},\,(y,z)\in{g},\,y\in{B}}
```

:::note

$g\circ{f}(x)$ is equivalent to $g(f(x))$

:::
