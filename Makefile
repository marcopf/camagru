all:
	docker compose up
re:
	docker compose down
	docker rmi $$(docker image ls -q) -f 
	docker compose up