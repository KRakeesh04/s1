#!/bin/bash

# Function to recursively find PDFs in subdirectories and concatenate them
concat_pdfs() {
    local dir="$1"
    local output_file="$2"

    # Find all PDFs in the directory and its subdirectories
    pdf_files=$(find "$dir" -type f -name "*.pdf" | sort)

    # Check if any PDFs were found
    if [ -z "$pdf_files" ]; then
        echo "No PDFs found in $dir"
        return 1
    fi

    # Concatenate PDFs using pdftk
    pdftk $pdf_files cat output "$output_file"

    echo "Created $output_file"
}

# Iterate through all subdirectories
find . -type d | while read -r dir; do
    # Skip the current directory
    if [ "$dir" == "." ]; then
        continue
    fi

    # Generate output file name from subdirectory path
    output_file=$(echo "$dir" | sed 's/\.\///g' | tr '/' '-')".pdf"

    # Concatenate PDFs in this directory
    concat_pdfs "$dir" "$output_file"
done
