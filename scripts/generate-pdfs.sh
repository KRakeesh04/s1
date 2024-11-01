#! /bin/bash

cd src/content/docs
files=$(find "summary" -name "*.md")

mkdir -p ../../../public/as-pdf
cd ../../../public/as-pdf

command_args=""

for file in $files; do
    filename="${file/.md//}"
    filename="${filename/\.\//}"

    page_url="http://localhost:4321/$filename"

    command_args+=" --inputs $page_url"
done

html-export-pdf-cli $command_args
