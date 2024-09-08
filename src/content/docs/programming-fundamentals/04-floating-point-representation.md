---
title: Floating-point representation
slug: programming-fundamentals/floating-point-representation
sidebar:
  order: 4
---

IEEE 754 standard.

2 types:

- single precision
- double precision

## Single precision

Uses $32$ bits. $ $

- sign bit - $1$ bit
- exponent - $8$ bit
- mantissa - $23$ bit

### Sign bit

$0$ if positive or zero. $1$ if negative.

### Exponent

Exponent field range - $[0,255]$. In this range $[1,254]$ is defined for normal
numbers. $0$ and $255$ are reserved for subnormal, infinite, signed zeros and
NaN.

To support negative exponents, we subtract $127$ (half of $254$) from this
range. $[-126,127]$. This range is the representable range.

### Mantissa

In scientific notation, the part that doesn't contain the base and the power.

In binary scientific notation, there will always be exactly one $1$ bit before
the dot. So we don't include that one. $ $

:::note[Example]

Take $31.3125$. $ $

- In binary: $1111.0101_2$
- In binary scientific notation: $1.1110101_2 \times 2^3$
- Add $127$ to exponent: $130$
- Convert exponent to binary $10000010$
- Write the final result: $0\;10000010\;00000000000000001110101$

Take $0.125$. $ $

- In binary: $-0.001_2$
- In binary scientific notation: $-1.0_2 \times 2^{-3}$
- Add $127$ to exponent: $124$
- Convert exponent to binary $01111100$
- Write the final result: $1\;01111100\;00000000000000000000000$

:::

## Double precision

Uses $64$ bits. $ $

- sign bit - $1$ bit
- exponent - $11$ bit
- mantissa - $53$ bit

### Sign bit

$0$ if positive or zero. $1$ if negative.

### Exponent

Exponent field range - $[0,2047]$. In this range $[1,2046]$ is defined for
normal numbers. $0$ and $2047$ are reserved for subnormal, infinite, signed
zeros and NaN.

To support negative exponents, we subtract $1023$ (half of $2046$) from this
range. $[-1022,1023]$. This range is the representable range.

### Mantissa

In scientific notation, the part that doesn't contain the base and the power.

In binary scientific notation, there will always be exactly one $1$ bit before
the dot. So we don't include that one. $ $

:::note[Example]

Take $31.3125$. $ $

- In binary: $1111.0101_2$
- In binary scientific notation: $1.1110101_2 \times 2^3$
- Add $1023$ to exponent: $1026$
- Convert exponent to binary: $10000000010$
- Write the final result:
  $0\;10000000010\;00000000000000000000000000000000000000000000001110101$

Take $0.125$. $ $

- In binary: $-0.001_2$
- In binary scientific notation: $-1.0_2 \times 2^-3$
- Add $1023$ to exponent: $1020$
- Convert exponent to binary: $1111111100$
- Write the final result:
  $1\;1111111100\;00000000000000000000000000000000000000000000000000000$

:::
