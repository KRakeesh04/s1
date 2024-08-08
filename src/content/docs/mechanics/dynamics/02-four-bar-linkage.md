---
title: Four bar linkage
slug: mechanics/dynamics/four-bar-linkage
sidebar:
  order: 2
---

Four bar-shaped members connected to each other in one plane.

Usually:

- 1 fixed link
- 3 moving links
- 4 pin joints
- 2 moving pivots
- 2 fixed pivots

![Four bar linkage](/mechanics/dynamics/four-bar-linkage.jpg)

## Grashof's law

A four bar mechanism has at least one revolving link **if**
$l_0+l_3 \le l_1+l_2$. $ $

Here: $l_0,l_1,l_2,l_3$ are the length of four bars from shortest to longest. $
$

## Modes of motions

| Mechanism     | Action                            |
| ------------- | --------------------------------- |
| Crank rocker  | Shortest link is the input link   |
| Double crank  | Shortest link is the fixed link   |
| Double rocker | Shortest link is the coupler link |

### Crank rocker mechanism

Shortest link rotates a full circle. Other link oscillates.

### Double crank mechanism

Shortest link is fixed. Both links pivoted to the fixed link rotates a full
circle.

### Double rocker mechanism

Shortest link make full resolution.

## Special cases

$l_0+l_3 = l_1+l_2$. $ $

| Mechanism                                           | Orientation                            |
| --------------------------------------------------- | -------------------------------------- |
| Parallelogram linkage or anti-parallelogram linkage | Equal links are opposite to each other |
| Deltoid linkage                                     | Equal links are adjacent to each other |

### Parallelogram linkage

Double crank mechanism. Opposite links are equal and parallel. Angular velocity
of input crank & output crank is same. Orientation of the coupler doesn't change
during the motion.

### Anti-parallelogram linkage

Double crank mechanism. Angular velocity of input crank is different to output
crank.

### Deltoid linkage

- Longest link is fixed: crank rocker mechanism
- Shortest link is fixed: double crank mechanism

## Non-Grashof's condition

A four bar mechanism has at least one revolving link **if**
$l_0+l_3 \gt l_1+l_2$. $ $

Here: $l_0,l_1,l_2,l_3$ are the length of four bars from shortest to longest. $
$
