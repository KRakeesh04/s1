---
title: Composition
slug: maths/real-analysis/composition
sidebar:
  order: 10
---

## Composition of relations

Let $R:A\rightarrow{B}$ and $S:B\rightarrow{C}$ are 2 relations. Composition can
be defined when $\text{ran}(R)=\text{preran}(S)$.

Say $\text{ran}(R)=\text{preran}(S)=D$. Composition of the 2 relations is
written as: $ $

```math
S\circ{R}=\set{(a,c)\,|\,(a,b)\in{R},\,(b,c)\in{S},\,b\in{D}}
```

## Composition of functions

Let $f:A\rightarrow{B}$ and $g:B\rightarrow{C}$ be 2 functions where $f$ is
[onto](/maths/real-analysis/relations/#onto).

```math
g\circ{f}=\set{(x,z)\,|\,(x,y)\in{f},\,(y,z)\in{g},\,y\in{B}}=g(f(x))
```
