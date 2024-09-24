---
title: Magnetic Storage
slug: programming-fundamentals/magnetic-storage
sidebar:
  order: 16
---

## Tape drive

Stores data on magnetic tapes. high capacity. cost-effective. slow. mainly used
for data backups nowadays. Aka. DAT drives.

## Hard disk drive

Magnetic storage. Operationally identical to a conventional radio cassette tape.
Uses a disk coated with magnetic medium. High data transfer speed.

![Hard disk - internal structure](/programming/hard-disk-internal-structure.jpg)

Capacity can be improved by adding more platters. Platters are kept in dust free
environment to avoid damages because of high speed. Each side of the platter
require a read/write head.

Categorized by their capacity, controller, and platter rotation speed. Capacity
ranges from 500GB to 8TB. Platter rotation speeds are 3600, 5400 and 7200 RPM.

Available disk controllers:

- Integrated Device Electronics
- Small Computer System Interface
- Serial AT Attachment Interface

### Track

Single ring of data on one side of a platter.

### Sector

Fixed size (usually 512 bytes) divisions (usually about 900) of a track.

### Cylinder

Set of tracks on a disk, that are on each side of all platters in a stack and
are at the same distance from the center of the disk.

## Floppy disk drive

Removable. Has a flexible magnetic medium that is enclosed in a (semi-)rigid
plastic case.

![Parts of Floppy Disk](/programming/parts-of-floppy-disk.jpg)

![Functionality of Floppy Disk](/programming/floppy-disk-fundtionality.jpg)

The magnetic coated, semi rigid, plastic disk is kept in a plastic housing and
its two surfaces are covered by two paper rings (for protection). The disk is
mounted on a hub and a rectangular shaped cut-out is used by the disk driver to
firmly grab the disk while rotating. The read/write head access the disk through
a small opening called the flap. The spring-loaded shutter is used to cover up
the flap so that prevents any damages to the disk by dust particles. The shutter
will open up only when the disk is inside the disk driver and when it is ejected
the spring will automatically close the shutter. A write protect tab is used to
prevent the disk been overwritten and it either opens or closes the write
protect hole. If the write protect hole is closed the disk cannot be overwritten
(then light cannot penetrate through the hole) and if the hole is open (light
can penetrate through the hole) it can be overwritten. The head actuator
mechanism is slightly different to the mechanism in a hard disk. In a hard disk
the head arm moves laterally from centre of the disk towards to the edge while
in a floppy disk the movement is horizontal. The read/write head is mounted on a
spindle and the spindle is controlled by a stepper motor. The high density hole
is only available in High Density floppy disks.
