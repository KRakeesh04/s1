---
title: CPU
slug: programming-fundamentals/C-book/cpu
sidebar:
  order: 4
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

## Execution of a program

### Fetch cycle

Instruction is loaded into the CPU.

### Execution cycle

Instruction is executed by the CU. Aka. instruction cycle.

## Enhancing CPU Performance

### Instruction pre-fetching

When an instruction is in the execution cycle, next instruction will be fetched.

### Instruction pipelining

Instruction cycle is divided into sub-operations and different segments of CPU
handle each sub-operations.

Increases thorough put of the microprocessor.

### Hyper Threading

Allows different resources of the CPU to be used at the same time. CPU, BIOS,
OS, and chipset have to support HT technology to use this.

### Multicore processors

2 or more separate microprocessors, combined onto a single Silicon chip. Higher
performance gain compared to HT.

## CPU Support Chips

Carries out tasks on behalf of the CPU.

Examples:

- Direct Memory Access controllers
- Disk controllers
- Real-Time Clock
- Display controllers
- Interrupt controllers
- Communication controllers

### DMA controllers

Provides a way of bypassing the CPU when transferring data between memory and
Input/Output (IO) devices. Resides between memory and CPU.

### Disk controllers

When reading/writing to/from a disk the CPU will create a buffer (special memory
area) containing the sector address and the data to be written or read. Then the
CPU informs the controller about the location of the buffer. The controller then
transfers the content of the buffer directly from memory to the disk sector.

Examples:

- Floppy Disk Controller
- ATA Controller

### Real-Time Clocks

Used to keep track of time of the day. Usually backed-up by an extra power
source such as a Li battery. Used to store some of the configuration information
such as CMOS setup memory.

### Display controllers

Used to generate images and text that you see on the displaying device on behalf
of the CPU. The actual image (which is binary data) is generated in its memory
called "refresh buffer", then passed to video controller to be displayed.

### Video controllers

Used to display the image on monitors. Classified based on their video processor
and video memory.

Some video standards are:

- Video Graphics Array - minimum resolution: 320x240 in 256 colors or 640x480 in
  16 colors
- Super VGA - supports resolution up to 800x600
- Video Electronics Standards Association SVGA - was developed to standardize
  SVGA. Also includes a video standard for connecting high-speed adaptors
  directly to the processor bus.
