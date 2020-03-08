install:
	npm install

link:
	npm link

unlink:
	npm unlink

start:
	npx node bin/brain-games
	
publish:
	npm publish --dry-run

lint:
	npx eslint .

fixlint:
	npx eslint . --fix

