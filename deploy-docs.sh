git branch -f gh-pages
git checkout gh-pages
git reset --hard origin/master
yarn run docz:build
cp -R .docz/dist/* .
node replace-all '<script src="/static' '<script src="static' index.html
node replace-all 'static/' 'react-alegrify-ui/static/' static/js/runtime*.js
node replace-all '/static' 'static' assets.json
git add .
git commit -am 'gh-pages update'
git push origin gh-pages --force
git checkout master