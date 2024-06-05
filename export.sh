#!/bin/bash

output_file="project_contents.txt"
blacklist=("blacklisted_directory" "blacklisted_file.txt")

# Clear the output file
echo "" > "$output_file"

# Loop over all files in the directory and its subdirectories
find . -type f -print0 | while IFS= read -r -d '' file; do
    # Check if the file is in the blacklist
    skip=false
    for item in "${blacklist[@]}"; do
        if [[ $file == *"$item"* ]]; then
            skip=true
            break
        fi
    done
    if $skip; then
        continue
    fi

    # Check if the file has a .txt or .md extension
    if [[ $file != *.txt ]] && [[ $file != *.md ]]; then
        continue
    fi

    # Print an empty line to the output file
    echo "" >> "$output_file"
    # Print the file name to the output file
    echo "File: $file" >> "$output_file"
    # Print the contents of the file to the output file
    cat "$file" >> "$output_file"
    # Print a separator to the output file
    echo -e "\n\n---\n\n" >> "$output_file"
done