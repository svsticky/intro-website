SRC=$(shell find src/ -type f)
STATIC=$(shell find static -type f)

node_modules: package.json
	npm install

public: $(SRC) $(STATIC) node_modules
	npm run build

.PHONY: deploy
deploy: public
	# Allow everything
	ssh svsticky.nl chmod -R 777 /var/www/intro/intro-cs.svsticky.nl

	# Purge old stuff
	ssh svsticky.nl rm -rf /var/www/intro/intro-cs.svsticky.nl/*

	# Copy new stuff
	rsync --progress -r public/* svsticky.nl:/var/www/intro/intro-cs.svsticky.nl/

	# Fix permissions again
	ssh svsticky.nl chown -R tobias:tobias /var/www/intro/intro-cs.svsticky.nl
	ssh svsticky.nl chmod -R 777 /var/www/intro/intro-cs.svsticky.nl
	ssh svsticky.nl find /var/www/intro/intro-cs.svsticky.nl/ -type f -exec chmod u-x,g-x,o-wx {} +;