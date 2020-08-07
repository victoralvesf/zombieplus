up:
	docker-compose up -d

log:
	docker-compose logs -f

restart:
	docker-compose restart

down:
	docker-compose down

stop:
	docker-compose stop

jenkins.up:
	docker-compose -f jenkins-compose.yml up -d

jenkins.stop:
	docker-compose -f jenkins-compose.yml stop

jenkins.restart:
	docker-compose -f jenkins-compose.yml restart

jenkins.down:
	docker-compose -f jenkins-compose.yml down

jenkins.log:
	docker-compose -f jenkins-compose.yml logs -f