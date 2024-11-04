---
title: Limits
slug: maths/complex-analysis/limits
sidebar:
  order: 4
---

$\lim_\limits{z\to z_0} f(z) = L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{z}\;
\big(0<|z-z_0|<\delta\implies{|f(z)-L|<\epsilon})
```

Complex limit properties are similar to real limits.

## Difference from real functions

For real functions, when considering the limit at a point, the limit could be be
approaching the point either from left or right.

For complex functions, the point can be approached along any path in the complex
plane. The distance $\lvert z − z_0 \rvert$ decreases to $0$.

## Disproving limits

One way of disproving a complex limit is to choose 2 different paths and showing
the limits on each path are different. This is similar to showing the right and
left limits are different in real analysis.

In a limit, when using $y=mx$ in $z=x+iy$, if $m$ doesn't cancel out, then the
limit doesn't exists.

## Real and imaginary limits

Suppose $f(z)=u(x,y)+iv(x,y)$, $z_0 = x_0 + iy_0$, $z=x+iy$, and:

```math
\lim_\limits{(x,y)\to(x_0,y_0)} u(x,y)=L_1
\;\;\;
\lim_\limits{(x,y)\to(x_0,y_0)} v(x,y)=L_2
```

(The real part and imaginary part limits to $L_1,L_2$), Then: $ $

```math
\lim_\limits{z\to z_0} f(z)=L_1+iL_2
```

## Important limits

```math
\lim_\limits{z\to 0} \frac{z}{\overline{z}}\;\text{doesn't exist}
```

The above limit is important as it shows up in many questions. Can be disproved
by taking two paths: real, imaginary axes.

```math

\lim_\limits{z\to 0} \frac{z \overline{z}}{z+\overline{z}}\;\text{doesn't exist}

```

Can be proven usign taking 2 paths: real axis, $t+\sqrt{t}i$. $ $
