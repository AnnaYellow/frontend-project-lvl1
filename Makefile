install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node bin/brainGames.js

brain-calc:
	node bin/brainCalc.js

brain-even:
	node bin/brainEven.js

brain-gcd:
	node bin/brainGcd.js

brain-progression:
	node bin/brainProgression.js

brain-prime:
	node bin/brainPrime.js
