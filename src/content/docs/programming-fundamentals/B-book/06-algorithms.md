---
title: Algorithms
slug: programming-fundamentals/B-book/algorithms
sidebar:
  order: 6
---

An algorithm is a finite set of instructions, used to solve a problem.

:::note

In s1, only searching and sorting algorithms are discussed.

:::

:::caution

Even though an implementation is provided for each algorithm below, the code
might have issues.

:::

## Searching algorithms

### Iterative sequential search

```py
def iterative_sequential_search(a_list, item):
    for i in range(len(a_list)):
        if a_list[i] == item:
            return i

    return -1
```

### Recursive sequential search

```py
def recursive_sequential_search(a_list, item, offset = 0):
    if len(a_list) == 0:
        return False

    if a_list[0] == item:
        return True

    return recursive_sequential_search(a_list[1:], item)
```

### Binary search

```py
def binary_search(a_list, item):
    first = 0
    last = len(a_list) - 1
    found = False

    while first <= last and not found:
        mid = (first + last) // 2
        if a_list[mid] == item:
            found = True
        else:
            if item < a_list[mid]:
                last = mid - 1 # search in first half
            else:
                first = mid + 1 # search in second half

    if found:
        return mid
    else:
        return -1
```

### Time complexities

| Algorithms        | Best | Average  | Worst    |
| ----------------- | ---- | -------- | -------- |
| Sequential search | O(1) | O(n)     | O(n)     |
| Binary search     | O(1) | O(log n) | O(log n) |

## Sorting algorithms

A sorting algorithm reorganizes a collection of items into some order as defined
by values intrinsic to the items.

### Bubble sort

Makes multiple passes through a collection and compare adjacent items to reorder
those that are out of order.

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

### Selection sort

Keeps track of the position of the highest/smallest value encountered through a
pass over the list and after completing the pass perform the swap operation to
correctly place the item.

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

### Insertion sort

Maintains a sorted sublist in the lower positions in the list. Each item picked
from the unsorted sublist is inserted into the sorted sublist.

```py
def insertion_sort(a_list):
    for index in range(1, len(a_list)):
        current_value = a_list[index]
        pos = index
        while pos > 0 and a_list[pos - 1] > current_value:
            a_list[pos] = a_list[pos - 1]
            pos = pos - 1

        a_list[pos] = current_value
```

### Shell sort

Breaks the original list into a number of smaller sublists, each of which is
sorted using an insertion sort.

```py
def gap_insertion_sort(a_list, start, gap):
    for i in range(start + gap, len(a_list), gap):
        current_value = a_list[i]
        pos = i

        while pos >= gap and a_list[pos-gap] > current_value:
            a_list[pos] = a_list[pos - gap]
            pos = pos - gap

        a_list[pos] = current_value

def shell_sort(a_list):
    sublist_count = len(a_list) // 2

    while sublist_count > 0:
        for start_pos in range(sublist_count):
            gap_insertion_sort(a_list,start_pos,sublist_count)

        print("After increments of size", sublist_count,"The list is",a_list)

    sublist_count = sublist_count // 2
```

### Merge sort

Recursive algorithm that continually splits a list in half.

- If the list is empty or has one item, it is sorted
- If the list has more elements, the list is split in the middle and merge sort
  is recursively used on those parts
- Once sorted, the halves are combined to create a new, sorted list

```py
def merge_sort(a_list):
    if len(a_list) < 2:
        return

    print("Splitting ", a_list)
    mid = len(a_list) // 2
    left_half = a_list[:mid]
    right_half = a_list[mid:]

    merge_sort(left_half)
    merge_sort(right_half)

    i = 0; j = 0; k = 0
    while i < len(left_half) and j < len(right_half):
        if left_half[i] < right_half[j]:
            a_list[k] = left_half[i]
            i = i + 1
        else:
            a_list[k] = right_half[j]
            j = j + 1;
        k = k + 1

    while i < len(left_half):
        a_list[k] = left_half[i]
        i = i + 1; k = k + 1
    while j < len(right_half):
        a_list[k] = right_half[j]
        j = j + 1; k = k + 1
    print("Merging ", a_list)
```

### Quick sort

Recursive algorithm that use the divide and conquer strategy to continually
split a list around a selected value called the split point.

- Selects a pivot (a value in the list)
- List is partitioned into 2 parts
  - With the elements lesser than the pivot
  - With the elements greater than the pivot
- The partitions are recursively sorted

```py
def quick_sort(a_list, first, last):
    if first < last:
        split_point = partition(a_list, first, last)
        quick_sort(a_list, first, split_point - 1)
        quick_sort(a_list, split_point + 1, last)

def partition(a_list, first, last):
    pivot_value = a_list[first]
    left_mark = first + 1
    right_mark = last
    done = False

    while not done:
        while left_mark <= right_mark and a_list[left_mark] <= pivot_value:
        left_mark = left_mark + 1

        while a_list[right_mark] >= pivot_value and right_mark >= left_mark:
            right_mark = right_mark - 1 36 / 46

            if right_mark < left_mark:
                done = True
            else:
                temp = a_list[left_mark]
                a_list[left_mark] = a_list[right_mark]
                a_list[right_mark] = temp

    temp = a_list[first]
    a_list[first] = a_list[right_mark]
    a_list[right_mark] = temp

    return right_mark
```

### Heap sort

Uses a [binary heap](/programming-fundamentals/b-book/data-types/#binary-heap).

Similar to selection sort where a search is done to find the item with the
minimum value and this item is placed at the beginning of the list. The same
process is repeated for remaining items.

Steps:

1. A max-heap is built from the input data
2. Largest item is stored at the root of the heap. Replace it with the last item
   of the heap.
3. Size of the heap is reduced by 1
4. Heapify the root of the tree
5. Repeat steps 2-4 until the size of the heap is greater than 1.

The heapify procedure can be applied to a node only if its children nodes are
heapified. So the heapification must be performed in the bottom-up order.

```py
# To heapify subtree rooted at index i. Heap size is n.
def heapify(a_list, n, i):
  largest = i # Initialize largest as root
  l = 2 * i + 1 # left = 2*i + 1
  r = 2 * i + 2 # right = 2*i + 2

  # See if left child of root exists and is > root
  if l < n and a_list[i] < a_list[l]:
    largest = l

  # See if right child of root exists and is > root
  if r < n and a_list[largest] < a_list[r]:
    largest = r

  # Change root, if needed
  if largest != i:
    a_list[i],a_list[largest] = a_list[largest],a_list[i] # swap

    # Heapify the root.
    heapify(a_list, n, largest)

def heap_sort(a_list):
  n = len(a_list)

  # Build a maxheap. Since last parent will be
  # at ((n//2)-1) we can start at that location.
  for i in range(n // 2 - 1, -1, -1):
    heapify(a_list, n, i)

  # One by one extract elements
  for i in range(n-1, 0, -1):
    a_list[i], a_list[0] = a_list[0], a_list[i] # swap
    heapify(a_list, i, 0)
```

### Time complexities

| Algorithms     | Best       | Average        | Worst          |
| -------------- | ---------- | -------------- | -------------- |
| Bubble sort    | O(n)       | O(n^2)         | O(n^2)         |
| Selection sort | O(n^2)     | O(n^2)         | O(n^2)         |
| Insertion sort | O(n)       | O(n^2)         | O(n^2)         |
| Shell sort     | O(n)       | O((n log n)^2) | O((n log n)^2) |
| Merge sort     | O(n log n) | O(n log n)     | O(n log n)     |
| Quick sort     | O(n log n) | O(n log n)     | O(n^2)         |
| Heap sort      | O(n log n) | O(n log n)     | O(n log n)     |
