install: 
	npm install

run:
	npx babel-node src/bin/brain-prime.js

install-deps:
	npm install

build:
	npm run build
	
lint:
	npx eslint .

publish: 
	npm publish --dry-run