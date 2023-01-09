#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init 
git add -A
git commit -m '修复搜索报错'
git push -f https://github.com/LLF14/docs.git master:gh-pages

cd -
rm -rf docs/.vitepress/dist
