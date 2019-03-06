git branch -f gh-pages
git checkout gh-pages
git reset --hard origin/master
yarn run docz:build
cp -R .docz/dist/* .
npm i -g replace-in-file
replace-in-file '<script src="/static' '<script src="https://dejakob.github.io/react-alegrify-ui/static' index.html
git add .
git commit -am 'gh-pages update'
git push origin gh-pages --force
git checkout master