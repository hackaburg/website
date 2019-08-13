#!/bin/bash
# build the current site
yarn build

# backup the current site
output_folder_name="dist"
tmp_folder_name=$(mktemp -u XXXXX)
mv $output_folder_name $tmp_folder_name

# get all tags prefixed with "hb-", as those are the previous years
all_year_tags=$(git tag -l hb-*)

for tag in $all_year_tags; do
  year=${tag:3}
  echo "building site for $year"

  git checkout $tag
  if [[ $? != 0 ]]; then
    exit $?
  fi

  yarn install
  yarn build
  mv $output_folder_name "$tmp_folder_name/$year"
done

mv $tmp_folder_name $output_folder_name

# restore master branch
git checkout master
yarn install
