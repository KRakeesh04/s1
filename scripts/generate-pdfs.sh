#!/bin/bash

bun scripts/convert-to-pdf.js

cd public/as-pdf

../../scripts/merge-pdfs.sh