---
title: Continued Fraction Expansion
slug: maths/real-analysis/continued-fraction
sidebar:
  order: 4
---

## The process

- Separate the integer part
- Find the inverse of the remaining part. Result will be greated than 1.
- Repeat the process for the remaining part.

## Finite expansion

Take $ \frac{420}{69} $ for example. IYKYK. $ $

$ \frac{420}{69} = 6 + \frac{6}{69} $

$ \frac{420}{69} = 6 + \cfrac{1}{\frac{69}{6}} $

$ \frac{420}{69} = 6 + \cfrac{1}{11 + \cfrac{3}{6}} $

$ \frac{420}{69} = 6 + \cfrac{1}{11 + \cfrac{1}{2}} $

As $ \frac{420}{69} $ is finite, its continued fraction expansion is also
finite. And it can be written as $ \frac{420}{69} = [6; 11, 2] $.

## Infinite expansion

For irrational numbers, the expansion will be infinite.

For example $ \pi $: $ $

$ \pi = 3 + \cfrac{1}{7 + \cfrac{1}{15 + \cfrac{1}{1 + \cfrac{1}{292 +
\dotsb}}}} $

Conintued fraction expansion of $ \pi $ is $ [3; 7, 15, 1, 292, 1, 1, 1, 2,
1, 3, 1, 14, 2, 1, 1, 2, \ldots] $.
