---
title: Solving First Order Ordinary Differential Equations
sidebar:
  label: Solving First Order ODE
---

## Separable equation

Separable if x and y functions can be separated into separate one-variable
functions (as shown below).

$ \frac{\text{d}y}{\text{d}x} = f(x)g(y) $

$ \int{\frac{1}{g(y)} \text{d}y} = \int{f(x) \text{d}x} $

## Homogenous equation

$ \frac{\text{d}y}{\text{d}x} = f(x,y) $

Here the function $ f(x,y) $ is homogenous when $ f(x,y) = f(\lambda x, \lambda
y) $.

To solve:

- Use $ y = vx $ substitution, where $ v $ is a function of $ x $ and $ y $.
- By differentiating both sides: $ \text{d}y = v + v\text{d}x $
- Applying both of these into the equation, simplies it to be separable.

## Reduction to homogenous type

$ \frac{\text{d}y}{\text{d}x} = \frac{ax + by + c}{Ax + By + C} $

When we have a equation of this type, we can reduce it to homogenous form.

- Find $ h $ and $k$ such that $ ah + bk + c = 0 $ and $ Ah + Bk + C = 0 $.
- Use substituions:
  - $ X = x + h $
  - $ Y = y + k $

The reduced equation would be:

$ \frac{\text{d}Y}{\text{d}X} = \frac{aX + bY}{AX + BY} $

## Linear equation

$ \frac{\text{d}y}{\text{d}x} + P(x)y = Q(x) $

The above form is called **the standard form**.

When $ Q(x) = 0 $, $ \frac{\text{d}y}{\text{d}x} + P(x)y = 0 $, the equation
would be separable.

Otherwise:

- Identify P(x) from the standard form
- Calculate integrating factor: $ I = e^{\int{P(x) \text{d}x}} $. Integrate
  P(x). Put it as the power of e.
- Multiply both sides by $ I $. $ \text{L.H.S} $ becomes $ \frac{d}{dx}(yI) $.
  We can solve by integrating both sides.

## Bernoulli's equation

$ \frac{\text{d}y}{\text{d}x} + P(x)y = Q(x)y^n $

The above equation is Bernoulli's equations when $ n \in \Reals $. $ $

When $ n = 0 $ or $ n = 1 $, the equation would be linear.

Otherwise we can use $ v = y^{1-n} $ to convert it to linear form. $ $
