install: 
	npm install

test:
	npx babel-node src/bin/games/brain-even.js

install-deps:
	npm install

build:
	npm run build
	
lint:
	npx eslint src/bin/

publish: 
	npm publish --dry-run