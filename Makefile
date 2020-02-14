install:
	npm install

start:
	npx node bin/brain-games
	
publish:
	npm publish --dry-run

lint:
	npx eslint .

.PHONY:test
