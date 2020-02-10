install:
	npm install

start:
	npx node --experimental-modules bin/brain-games
	
publish:
	npm publish --dry-run
