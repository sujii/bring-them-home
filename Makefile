auto-clean:
	@sh ./scripts/yarn-auto-clean.sh
	@echo '🧸✨ [ Finished ]: ✨ Installing yarn workspaces packages...'

auto-clean-hard:
	@sh ./scripts/yarn-auto-clean-hard.sh
	@echo '🧸✨ [ Finished ]: ✨ Installing yarn workspaces packages...'

# auto-clean + gen-openapi
auto-setup:
	@sh ./scripts/yarn-auto-clean.sh && chmod a+x ./packages/app/src/open-api/**/* && cd ./packages/api-client/ && make gen-openapi
	@echo '🧸💫 [ Finished ]: ✨ Rebuiling workspaces, Generating OpenAPI Specs...'

gen-openapi:
	@chmod a+x ./packages/api-client/scripts/* && chmod a+x ./packages/app/src/open-api && cd ./packages/api-client/ && make gen-openapi
	@echo '🧸💗 [ Finished ]: ✨ Generating OpenAPI Specs...'

boot-server:
	@chmod a+x ./packages/api-client/scripts/* && cd ./packages/api-client/ && make boot-server
	@echo '🧸✨ [ Finished ]: ✨ Booting Api-Client-Server...'

open-cypress:
	@cd ./middleware/cypress/ && sh ./scripts/open-cypress-e2e-test.sh
	@echo '🧸✨ [ Finished ]: ✨ Booting Api-Client-Server... '

boot-swagger:
	@cd ./middleware/swagger/ && sh ./scripts/boot-swagger.sh
	@echo '🧸✨ [ Finished ]: ✨ Booting SwaggerUI... '
