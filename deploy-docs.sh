git branch -f gh-pages
git checkout gh-pages
git reset --hard origin/master
yarn run docz:build
cp -R .docz/dist/* .
git add .
git commit -am 'gh-pages update'
git push origin gh-pages --force
git checkout master