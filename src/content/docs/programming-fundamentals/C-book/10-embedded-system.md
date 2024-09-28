---
title: Embedded System
slug: programming-fundamentals/C-book/embedded-system
sidebar:
  order: 10
---

A special-purpose computer which is completely encapsulated by the device it
control. A typical embedded system has a single specialized function.

The computer sits behind the equipment and controls its various components based
on the input provided by the user and obtained from number of sensors attached
to the system. The way this interaction occurs is usually implemented by the
software that run inside the embedded computer. Due to the flexibility and
advanced processing capabilities provided by the software, manufacturers of
these equipment increasingly prefer to use embedded systems rather than their
traditional hardwired controllers.

## Differences with normal computers

- Processing unit is typically a microcontroller
- End users wouldn't feel the existence of embedded computer most of the time.
- Used over a very long period of time and generally they cannot be programmed
  or maintained by the end user.
- Have many design constraints such as:
  - limited memory
  - requirement of low cost
  - strict performance guarantee
  - fail-safe operations
  - low power consumption
  - reliability
  - guaranteed real-time behaviour
- Can be optimized as they are dedicated to a specific task.
- Often use simple executives (OS kernels) or real-time OSs, support for
  real-time scheduling and no hard drives.
- Often interact with their physical environment using a variety of sensors
  and/or actuators.

### Microcontroller

Can be considered as a very simple and a small-scale computer in a single chip.

Has a program memory, a processing unit and a random access memory (registers)
which maps to hard disk, CPU and RAM in a typical personal computer
respectively. Lightweight.

Programming and designing circuits with microcontrollers are quite complex and
not friendly for beginners. Microcontroller programs have to be written
separately and inserted into the device using a separate tool (a programmer).

## Examples

- thermostats
- calculators
- ATMs
- printers
- video game consoles
- Handheld computers
- PDAs
- cell phones

The line of definition continues to blur as devices get more famous and
expanded.
