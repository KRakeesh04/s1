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

### Programmable Read Only Memory
