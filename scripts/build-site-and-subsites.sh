#!/bin/bash

# patterns to identify whether year tags and dev branches
year_tag_pattern="hb-*"
dev_branch_pattern="dev/*"

# we'll restore the original branch at the end
original_branch=$(git rev-parse --abbrev-ref HEAD)

git checkout master
yarn install
yarn build

# backup the current site
output_folder_name="dist"
tmp_folder_name=$(mktemp -u XXXXX)
mv $output_folder_name $tmp_folder_name

# get all tags prefixed with "hb-", as those are the previous years
all_year_tags=$(git tag -l $year_tag_pattern)

# get all dev branches
all_dev_branches=$(git branch --remote --list origin/$dev_branch_pattern | cut -c 10-)

# combine build targets
printf -v all_builds $"$all_year_tags\n$all_dev_branches"

for build in $all_builds; do
  if [[ $build == hb-* ]]; then
    build_name=${build:3}
  else
    build_name=$build
  fi

  echo "building site for $build"

  git checkout $build
  if [[ $? != 0 ]]; then
    exit $?
  fi

  yarn install
  yarn build

  # move built files to the output directory. we can't just move
  # the output directory there, as it might be a symlink
  build_output_name="$tmp_folder_name/$build_name"
  mkdir -p "$build_output_name"
  mv "$output_folder_name/*" "$build_output_name"
done

mv $tmp_folder_name $output_folder_name

# restore original_branch branch
git checkout $original_branch
yarn install
