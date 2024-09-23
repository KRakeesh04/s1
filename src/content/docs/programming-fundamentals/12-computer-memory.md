---
title: Computer Memory
slug: programming-fundamentals/computer-memory
sidebar:
  order: 12
---

2 types:

- Permanent or non-volatile
- Temporary or volatile - will be lost when power is off

Instructions and data for the CPU is sent from the memory. Results are sent back
to the memory.

Consists of an array of consecutive memory locations. Each location is
identified by a memory address and stores a single piece of data, usually a
byte. CPU can either read or write a single memory location at a time.

## Memory Bus

A set of electrical connections that connect memory locations with CPU.

3 types:

- Address bus - used to indicate address of a memory location. goes from CPU to
  memory
- Control bus - used to send control information (read request RD or write
  request WR) from CPU to memory.
- Data bus - actual data transmission. bidirectional.

Writing data:

1. Address bus is set with the memory address
2. Data bus is set with the data to be written
3. CPU activates WR in control bus

Reading data:

1. Address bus is set with the memory address
2. CPU activates RD in control bus
3. Data is fetched using data bus

## Types of Memory

### Read Only Memory

Memory is written (hardcoded) when they are fabricated as ICs. Used to store
initial start-up programs. Not economical to produce in small quantities.

Example: ICs in the market that have various melodies.

### Programmable Read Only Memory

Similar to ROM but, the content can be written (using special equipment) once
after the manufacturing process. Cost effective compared to ROMs.

### UV Erasable PROM

Similar to PROM but can be written multiple times. The content should be erased
using UV light before new content is written. Both erasing and programming
process require special equipment.

### Electrical Erasable PROM

Similar to UVEPROM but the content can be erased by applying a special high
voltage.

### Flash ROM

A special type of EEPROM that can be erased or programmed while in the
application circuit. The contents remains unchanged even after a power failure.

Commonly used in modern PCs, various networking devices such as routers and
firewalls and memory pens (also referred as memory sticks or USB pens).

### Read Write Memory

Aka. RAM. Volatile.

2 types:

- Static RAM - uses transistors
- Dynamic RAM - uses capacitors. bulk of the PC memory is made using DRAM.

| Transistors                                  | Capacitors                                                 |
| -------------------------------------------- | ---------------------------------------------------------- |
| Uses semiconductors                          | Uses semiconductors                                        |
| High speed switching                         | Slower performance                                         |
| Retains state forever (if power is supplied) | Discharges after some time, needs refreshing (in μs scale) |
| More reliable                                | Less reliable                                              |
| Low transistor density                       | High capacitor density                                     |
| High power consumption                       | Low power consumption                                      |
| High cost per bit                            | Low cost per bit                                           |

## Memory Modules

Set of memory ICs presented as a single memory block to the motherboard .

Type of memory modules:

- SIM - Single Inline Memory Module
- DIMM - Dual Inline Memory Module (64-bit wide 168-pin)
- DDR-DIMM - Double Data Rate-DIMM

## Memory Characteristics

- Access speed – time taken for the CPU to read from or write to memory
- Cycle time – time taken to complete 1 memory access operation
- Packing Density - memory capacity per unit area
- Power consumption
- Cost - cost per unit of memory capacity

## Memory Hierarchy

Modern CPUs are much faster than the speed of memory. The memory has to be
organised in such a way that its slower speed does not reduce the performance of
the overall system.

The ultimate objective of having a memory hierarchy is to have a memory system
with a sufficient capacity and which is as cheap as the cheapest memory type and
as fast as the fastest memory type. The main idea is to use a limited capacity
of fast but expensive memory types and a larger capacity of slow but cheap
memory types. Special methods are used to store the frequently used items in the
faster devices and others in slower devices.

### Traditional

![Traditional Memory Hierarchy](/programming/traditional-memory-hierarchy.jpg)

### Modern

Cache memory is added to this hierarchy to bridge the speed difference between
processor and memory. It is used by the microprocessor to store frequently used
instructions and data.

![modern-memory-hierarchy](/programming/modern-memory-hierarchy.jpg)

:::note[Swapping & Paging]

When free space is needed in cache memory, infrequently used data and
instructors are sent back to the main memory. This process is called swapping.

When free space is needed in main memory, some of the data and instructions are
sent to the secondary storage. This process is called paging.

:::
