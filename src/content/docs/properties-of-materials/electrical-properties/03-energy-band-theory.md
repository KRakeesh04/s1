---
title: Energy Band Theory
slug: properties-of-materials/electrical-properties/energy-band-theory
sidebar:
  order: 3
---

In every atom, electrons occupy discrete energy levels in atomic orbitals,
arranged into shells and subshells. In an isolated atom, electrons occupy
well-defined energy states.

When $N$ atoms are brought together in a solid, each discrete energy levels will
split to $N$ levels, which are closely spaced. The closely spaced energy levels
form energy bands.

## Energy bands in a solid

- **Valence band**: The highest energy band that can be occupied by electrons at
  $0\text{K}$.
- **Conduction band**: The empty band just above the valence band.

At higher temperatures, electrons which have sufficient energy can jump to
conduction band. At this energy level, electrons can move freely through the
material.

## Fermi Energy

The energy level which is occupied by the highest electron orbital at $0K$. $ $

In absolute zero temperature, electrons settle into lowest available energy
states and build a _Fermi Sea_ of electron energy states. Fermi energy is the
surface of this sea and no electron has energy to rise above this surface.

## Fermi Level

The energy level where Fermi-Dirac distribution equals to 0.5.

The closer the Fermi level is to the conduction band energy, the easier it will
be for electrons in the valence band to transition into the conduction band.

For an electron to become free, it must be excited or promoted into one of the
empty and available energy states above $E_f$. In metals, this energy is very
small. In semiconductors and insulators, this energy is high.

## Fermi-Dirac Distribution

In a system which is in thermodynamic equilibrium, the probability of finding an
electron in a single energy state $E_i$ at temperature $T$ is given by the
Fermi–Dirac (F– D) distribution.

```math
f(E_i)=\frac{1}{e^{\frac{E_i-E_f}{K_BT}}+1}
```

Here:

- $E_f$ - Fermi level
- $E_i$ - Energy of the $i$th energy state
- $K_B$ - Boltzmann constant
- $T$ - Absolute temperature

### At T=0

- $E>E_f \implies f(E)=0$: No electrons above fermi level
- $E<E_f \implies f(E)=1$: All electrons are below fermi level

### At T>0

There is more chance that the electrons can be available in conduction band. The
chance increases with increasing temperature.
