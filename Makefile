install: 
	install

start:
	npx babel-node src/bin/brain-games.js

install-deps:
	npm install

build:
	npm run build
	
lint:
	npx eslint

publish: 
	npm publish --dry-run