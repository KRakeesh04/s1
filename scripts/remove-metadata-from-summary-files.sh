#!/bin/bash

files=$(find ./public/as-pdf/ -name "*.pdf")

mat2 -s --inplace $files
