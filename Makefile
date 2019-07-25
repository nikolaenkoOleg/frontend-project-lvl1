install: 
	npm install

test:
	npx babel-node src/bin/brain-even.js

install-deps:
	npm install

build:
	npm run build
	
lint:
	npx eslint .

publish: 
	npm publish --dry-run