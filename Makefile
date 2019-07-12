install: 
	npm install

start:
	npx babel-node src/bin/brain-games.js

test:
	npx babel-node src/bin/games/brain-gcd.js

install-deps:
	npm install

build:
	npm run build
	
lint:
	npx eslint

publish: 
	npm publish --dry-run