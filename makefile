start:
	docker-compose -f 'docker-compose.yml'  -p 'traefik-demo' down --remove-orphans && docker-compose up --build

down:
	docker-compose -f 'docker-compose.yml'  -p 'traefik-demo' down --remove-orphans

prune:
	docker system prune -a