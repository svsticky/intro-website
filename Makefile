.PHONY: build
build:
	npm install
	npm run build

.PHONY: deploy
deploy: build
	# Allow everything
	ssh svsticky.nl chmod -R 777 /var/www/intro/intro-cs.svsticky.nl

	# Purge old stuff
	ssh svsticky.nl rm -rf /var/www/intro/intro-cs.svsticky.nl/*

	# Copy new stuff
	rsync --progress public/* svsticky.nl:/var/www/intro/intro-cs.svsticky.nl/

	# Fix permissions again
	ssh svsticky.nl chown -R tobias:tobias /var/www/intro/intro-cs.svsticky.nl
	ssh svsticky.nl chmod -R 777 /var/www/intro/intro-cs.svsticky.nl
	ssh svsticky.nl find /var/www/intro/intro-cs.svsticky.nl/ -type f -exec chmod u-x,g-x,o-wx {} +;