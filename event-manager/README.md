# INSTRUCTIONS

1. Set the Ports and Environments variables on the file docker-compose.dev.local.yml

Run the command to enter on Dev mode. (this allow live reload)

 `npm run docker-dev:up`

To run the system on production mode run:
 `npm run docker:up`

To fill the database from scratch

`docker exec -it {container-name} npm run fill`

e.g eventmanager_back_1

Swagger documentation http://localhost:3000/docs
(Note: Change the port to match with the one on the docker-compose.dev.local.yml services->back->ports xxxx:3000)
