#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init 
git add -A
git commit -m '更新'
# git push -f https://github.com/LLF14/docs.git master:gh-pages
git push origin master

cd -
rm -rf docs/.vitepress/dist
