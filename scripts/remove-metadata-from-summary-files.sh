#!/bin/bash

files=$(find ./public/as-pdf/ -name "*.pdf")

exiftool -overwrite_original_in_place -all:all= $files
