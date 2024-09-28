---
title: Data Structures & Algorithms
slug: programming-fundamentals/B-book/dsa
sidebar:
  order: 5
---

## Data structures

Common data types that are useful in many different places.

### Abstract Data Type

A data type that has well defined properties and operations but not
implementation.

### Examples

- Array - fixed-length, one-dimensional
- Set
- Stack - Last in; first out
- Queue - First in; first out
- Binary search tree

:::note

Implementations of stacks, queues, and binary search trees are required in s1.

:::

## Algorithms

An algorithm is a finite set of instructions, used to solve a problem.

:::note

In s1, only sorting algorithms are discussed.

:::

### Selection sort

Here is selection sort algorithm that sorts a list of numbers in-place:

```py
def selection_sort(arr):
    for current_starting_index in range(len(arr)):
        smallest_index = current_starting_index
        for i in range(current_starting_index + 1, len(arr)):
            if arr[i] < arr[smallest_index]:
                smallest_index = i
        arr[smallest_index], arr[current_starting_index] = arr[current_starting_index], arr[smallest_index]
```

### Bubble sort

Here is bubble sort algorithm that sorts a list of numbers in-place:

```py
def bubble_sort(arr: list[int | float]):
    sorted_index_count = 0
    while sorted_index_count < len(arr):
        for i in range(len(arr)-sorted_index_count-1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
        sorted_index_count += 1
```
