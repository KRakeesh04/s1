#!/bin/bash

files=$(find ./public/as-pdf/ -name "*.pdf")

mat2 -L --inplace $files