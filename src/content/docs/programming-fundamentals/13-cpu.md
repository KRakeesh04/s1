---
title: CPU
slug: programming-fundamentals/cpu
sidebar:
  order: 13
---

CPU in today's computers are microprocessors. A CPU:

- performs logical & arithmetic operations
- controls all the other components and subsystems

## Components of a CPU

### Arithmetic & Logical Unit

Arithmetic unit handles arithmetic operations. Logical unit handles logical
operations.

### Control Unit

Controls the operation of the CPU and rest of the machine

### Registers

A type of memory that can hold a unit of data. Can be used for both data
processing and control functionalities.

## Type of registers

### Program Counter

Keeps track of memory address of the next instruction to be executed.

### Instruction Register

After an instruction is fetched into the CPU, it is stored in IR for execution.
Keeping IR closer to CU (in the scale of micrometers) enables faster execution
speed.

### Accumulator

Where result of arithmetic or logical operation is stored immediately.

### Flag Register

Stores the status of the last operation carried out by ALU.

### General Purpose Registers

Can be used to various tasks. Used to store immediate results of the ALU. Number
of GPRs vary depending on the CPU. Usually denoted as "B", "C" and so on.

## Internal Structure

![CPU Internal Structure](/programming/internal-structure-of-cpu.jpg)

- There is a secondary ALU after PC. That increments the PC after fetching a new
  instruction.
- ALU accepts maximum 2 inputs. One input should come from accumulator.
