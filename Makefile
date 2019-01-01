.PHONY: build clean deploy lint node_modules start test

node_modules:
	@npm install

start:
	@node_modules/.bin/gatsby develop

build:
	@node_modules/.bin/gatsby build

deploy:
	@aws s3 sync ./public/ s3://seapelt.com/ --acl public-read --delete --cache-control 'max-age=300'

test: lint

lint:
	@node_modules/.bin/standard "src/**/*.js" "src/**/*.jsx"

clean:
	@rm -rf node_modules public
