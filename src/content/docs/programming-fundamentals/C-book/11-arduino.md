---
title: Arduino
slug: programming-fundamentals/C-book/arduino
sidebar:
  order: 11
---

An open-source physical computing platform based on a simple general purpose
microcontroller board, and a development environment (Arduino IDE) for writing
software for the board. Arduino is a platform that can be used to develop and
implement embedded systems.

Arduino is a ready to go platform which you can use to simply plug into the
computer, upload a program and run it without any additional circuit
development.

- Can be used to develop interactive devices, taking inputs from a variety of
  switches or sensors, and controlling a variety of lights, motors, and other
  physical outputs.
- Can be stand-alone, or can be run through a software (e.g., Flash, Processing,
  MaxMSP)

The boards can be assembled by hand or purchased pre-assembled; the open-source
IDE can be downloaded for free. So, it suits well for beginner in embedded
programming.

Programming an embedded platform like the Arduino is somewhat different from
programming a PC. Unlike the PC, Arduino does not have a keyboard, or a display
screen directly attached to it. Moreover, the small amount of memory and storage
available is insufficient to host a usable program development environment such
as an IDE and a compiler or an interpreter. Hence Arduino programs are usually
written and compiled in a different computer (usually a PC) and later downloaded
into the Arduino board via the USB cable.

Compiling in a different computer and later downloading, is commonly referred to
as “cross- compiling”.

## Advantages

- Learning is easy as it hides messy details of microcontroller programming
- Comes with a lot of hardware facilities ready to use

## Hardware

The Arduino board is where the code is executed. The board can only control and
respond to electricity, so specific components are attached to the board to
enable it to interact with the real world.

These components can be

- sensors - converts some aspect of the physical world to electricity so that
  the board can sense it. Examples: sensors include switches, accelerometers,
  and ultrasound distance sensors.
- actuators - gets electricity from the board and converts it into something
  that changes the world. Examples: lights and LEDs, speakers, motors, and
  displays.

The most popular boards contain a USB connector that is used to provide power
and connectivity for uploading your software onto the board. Figure 4.3 shows
the basic components of an Arduino Uno.
