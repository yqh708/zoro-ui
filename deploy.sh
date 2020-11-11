#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
#set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/ht-ui

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:yqh708/ht-ui.git master:gh-pages // 部署到master下的gh-pages
#git push -f git@github.com:yqh708/ht-ui.git master 部署到master目录
git push -f git@github.com:yqh708/zoro-ui.git master:gh-pages

cd -

