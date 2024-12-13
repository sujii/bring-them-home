checkout:
	@git checkout package.json
	@git checkout yarn.lock

# --
# INSTALL
# ---------

berry:
	@corepack enable
	@yarn init -2 -w
	@yarn set version stable
	@make checkout
	@echo '🧸✨ [APP] Initialized yarn@berry ✨'

init:
	@yarn unlink && yarn link && yarn
	@echo '🧸✨ [APP] Workpaces Initialized ✨'

# --
# BUILD
# ---------

gen-openapi:
	@chmod a+x ./packages/api-client/scripts/* && chmod a+x ./packages/app/src/open-api && cd ./packages/api-client/ && make gen-openapi
	@echo '🧸✨ [ Finished ]: ✨ Generating OpenAPI Specs...'

# --
# BOOT
# ---------

boot-server:
	@chmod a+x ./packages/api-client/scripts/* && cd ./packages/api-client/ && make boot-server
	@echo '🧸✨ [ Finished ]: ✨ Booting Api-Client-Server...'

open-cypress:
	@cd ./middleware/cypress/ && sh ./scripts/open-cypress-e2e-test.sh
	@echo '🧸✨ [ Finished ]: ✨ Booting Api-Client-Server... '

boot-swagger:
	@cd ./middleware/swagger/ && sh ./scripts/boot-swagger.sh
	@echo '🧸✨ [ Finished ]: ✨ Booting SwaggerUI... '

# --
# shell shorthands
# ---------

envthis:
	@head -n 1 ./packages/app/src/.env

envs:
	@cat ./packages/app/src/.env
