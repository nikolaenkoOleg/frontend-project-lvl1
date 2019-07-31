install: 
	npm install

run:
	npx babel-node src/bin/brain-calc.js

install-deps:
	npm install

build:
	npm run build
	
lint:
	npx eslint .

publish: 
	npm publish --dry-run