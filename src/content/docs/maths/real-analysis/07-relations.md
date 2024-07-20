---
title: Relations
slug: maths/real-analysis/relations
sidebar:
  order: 7
---

## Definitions

- Cartesian Product of sets $A,B$  
  $A\times{B}=\set{(a,b)|a\in{A},b\in{B}}$

- Ordered pair  
  $(a,b)=\set{\set{a},\set{a,b}}$ $ $

## Relation

Let $A,B\not=\emptyset$. A relation $R:A\rightarrow{B}$ is a non-empty subset of
$A\times{B}$.

- Domain of $R$: $dom(R)=A$
- Codomain of $R$: $codom(R)=B$
- Range of $R$: $ran(R)=\set{y|(x,y)\in{R}}$
- $ran(R)\subseteq{B}$
- Pre-range of $R$: $preran(R)=\set{x|(x,y)\in{R}}$
- $preran(R)\subseteq{A}$
- $R$ is everywhere defined
  $\iff{A=dom(R)=preran(R)}\iff{\forall{a\in{A}}\,\exists{b\in{B}}\,(a,b)\in{R}}$
- $R$ is onto
  $\iff{B=codom(R)=ran(R)}\iff{\forall{b\in{B}}\,\exists{a\in{A}}\,(a,b)\in{R}}$
- Inverse of $R$: $R^{-1}=\set{(b,a)|(a,b)\in{R}}$

### Types of relation

- $R$ is many-one **iff**:  
  $\exists{a_1,a_2\in{A}},\,\exists{b\in{B}}\;((a_1,b),(a_2,b)\in{R}\,\land\,a_1\not=a_2)$
- $R$ is not many-one **iff**:  
  $\forall{a_1,a_2\in{A}},\,\forall{b\in{B}}\;((a_1,b),(a_2,b)\in{R}\,\land\,a_1=a_2)$
- $R$ is one-many **iff**:  
  $\exists{a\in{A}},\,\exists{b_1,b_2\in{B}}\;((a,b_1),(a,b_2)\in{R}\,\land\,b_1\not=b_2)$
- $R$ is not one-many **iff**:  
  $\forall{a\in{A}},\,\forall{b_1,b_2\in{B}}\;((a,b_1),(a,b_2)\in{R}\,\land\,b_1=b_2)$
- $R$ is many-many **iff** $R$ is one-many and many-one.
- $R$ is one-one **iff** $R$ is not one-many and not many-one.
