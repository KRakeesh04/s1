---
title: Semiconductivity
slug: properties-of-materials/electrical-properties/semiconductivity
sidebar:
  order: 4
---

Materials with band gap of less than $2.5\,\text{eV}$. $ $

## Holes

When electrons jump into conduction band, it leaves a hole in the valence band.
The hole can be treated as a positive charge, having an equal and opposite
charge value as an electron.

Under the influence of an electric filed, an electron in valence band can jump
into a hole, creating new hole in the electron’s original position.

Both electrons and holes contribute to the current flow of a semiconductor.

## Types of Semiconductors

2 types based on the crystal structure.

- Intrinsic: Made of a pure compound (no dopants)
- Extrinsic: Made of a pure compound (no dopants)

### Intrinsic Semiconductors

Fermi level lies in between conduction and valence bands. At higher temperatures
some electrons can be thermally excited and jump to conduction band.

#### Conductivity of Intrinsic Semiconductors

Because holes and electrons are equal in count:

```math
\sigma=n\lvert{e}\rvert(\mu_e+\mu_h)
```

Here:

- $\sigma$ - conductivity
- $n$ - carrier concentration
- $e$ - electron's charge
- $\mu_e$ - carrier mobility of electrons
- $\mu_h$ - carrier mobility of holes

:::note

Hole mobility is generally lower than electron mobility.

:::

In intrinsic semiconductors, conductivity is low due to small number of charge
carriers.

### Extrinsic Semiconductors

A doped semiconductor. Has more conductivity compared to intrinsic
semiconductors.

#### Doping

Introduction to a foreign atom (impurities) into a intrinsic semiconductor. The
foreign atoms are usually either pentavalent (i.e. Sb, P, As) or trivalent (i.e.
B, Ga, In).

2 types based on the dopant.

- n-type: When dopant is a pentavalent atom.
- p-type: When dopant is a trivalent atom.

#### n-type

Increased number of electrons. Fermi level is shifted upwards, due to extra
electron energy states (**donor state**).

At room temperature, thermal energy is sufficient to excite the electrons from
donor states.

```math
\sigma\approx n\lvert{e}\rvert\mu_e
\;\;
\text{because}
\;
(n_e >> n_h)
```

#### p-type

Increased number of holes. Extra hole energy levels are introduced above valence
band (**acceptor state**).

At room temperature, electrons in valence band can jump into acceptor state,
facilitating movement of holes

```math
\sigma\approx n_h\lvert{e}\rvert\mu_h
\;\;
\text{because}
\;
(n_h>>n_e)
```