---
title: Hydrostatic Thrust
---

## On a Plane Surface

Acts **normal to the surface** on the point on the surface known as **the Centre
of Pressure** with a magnitude of:

$ \text{Thrust} = \text{submerged area} \times P_c $

$C$ is the centroid of the submerged area. $P_c$ is the pressure at the
centroid.

### Centre of Pressure

```math
y_p = y_c + \frac{I_{\text{cc}}}{A\cdot y_c}
```

Here:

- $A$ - Total submerged area
- $y_p$ - Distance to centre of pressure measured along the submerged surface
  from the free surface
- $y_c$ - Distance to $C$ measured along the submerged surface from the free
  surface
- $I_{\text{cc}}$ - Second moment of submerged area about the centroidal surface
  parallel to the free surface

:::note[For a plane surface]

$ \frac{\text{Hydrostatic thrust}}{\text{Unit length}} = \text{Area of the
pressure diagram} $

:::

### Proof

![Hydrostatic thrust on a plane surface](/fluids/hydrostatic-thrust-on-a-plane.jpeg)

#### Direction

All forces acting on the surface is normal to the surface. Therefore $F$ is
normal to the surface. $ $

#### Magnitude

```math
F = \int_A{\text{d}F}
= \int_A{p\text{d}A}
= \int_A{ysin{\theta}\rho g\, \text{d}A}
```

```math
F = sin{\theta}\rho g \int_A{y\,\text{d}A}
= sin{\theta}\rho g \cdot A y_{c}
= A\cdot {y_{c}sin{\theta}\rho g}
```

```math
F = AP_c
```

#### Line of action

```math
F \cdot y_p = \int_{A}{y\,\text{d}F}
```

```math
y_p = \frac{\int_{A}{y\,\text{d}F}}{\int_{A}{\text{d}F}}
= \frac{\int_{A}{y(ysin{\theta}\rho g)\,\text{d}A}}{\int_{A}{ysin{\theta}\rho g\,\text{d}A}}
= \frac{\int_{A}{y^2\,\text{d}A}}{\int_{A}{y\,\text{d}A}}
```

```math
y_p
= \frac{I_{oo}}{Ay_c}
= y_c + \frac{I_{cc}}{Ay_c}
```

## On a Curved Surface

$ F_x = \text{Thrust exerted on the vertical projection of the submerged
surface} $

$ F_y = \text{Weight of the fluid above submerged surface} $

### Proof

![Hydrostatic thrust on a curved surface](/fluids/hydrostatic-thrust-on-a-curved-surface.png)

For the equilibrium of the fluid volume $ABCDA$. $ $

```math
F_y = W_{ABCDA}
```

For the equilibrium of the fluid volume $ABEA$. $ $

```math
F_x = F_{AE}
```

:::note[Tensile stress in pipe]

For a pipe with inner diameter $d$ and thickness $t$ containing a liquid under
pressure $p$, experiences a tensile stress $f = \frac{pd}{2t}$.

:::
