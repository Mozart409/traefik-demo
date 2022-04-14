start:
	docker-compose up --build

down:
	docker-compose -f 'docker-compose.yml'  -p 'traefik-demo' down --remove-orphans