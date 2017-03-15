# Marketplace Architecture

This repository contains all of the necessary parts to be up and running with the marketplace and its dependencies.

## Required reading

You should have decent knowledge of the following:

1. `git` and `submodules`
2. `docker` and `docker-compose`
3. `node`
4. `react`
5. `redux`
6. `mysql`
7. `mongodb`
8. `es6`
9. `swagger`

## Architecture

### Local
![MarketPlace-PRO](/uploads/7cb2b20093ab9a9bd73391ec7bf3fc59/MarketPlace-PRO.PNG)
### UAT
![MarketPlace-UAT](/uploads/a595eee898b303caa086bea26b8ff7cd/MarketPlace-UAT.PNG)
### Development Environment
![MarketPlace-DEV](/uploads/d5bf07202742ac7963d9e4d129f20c64/MarketPlace-DEV.PNG)

## Actors

There are a number of actors that we use for this project that reference various user roles. For reference they are listed below:

### Dede

Dede is the main administrator of the application.

### Bob

Creates (CRUD) products
Can view assignations that contain his own products
Can move the timeline to the next step for his own product inside an assignation

### Odile

Odile is an operator.
A product owner.

### Michel

Manager
Validates assignations

### Gerard

Fleet manager
Creates assignations

### Alisson

Customer
Can view assignments that are assigned to her

## User Permissions

We have a flexible permission system set up that allows the creation of roles that include any number of permissions.

Some permissions by default include other permissions and some permissions exclude other permissions.

For instance a the permission CREATE_PRODUCT includes the permission EDIT_PRODUCT_OWN because when you create a product
you are taken straight to the edit field, so this link makes sense. Permission inclusion must never be circular. I.e A
can include B but B cannot include A. If you see that is makes sense for two permissions to include each other then they
are the same permission.

An excludes example would be REQUEST_PUBLICATION_PRODUCT and VALIDATE_PUBLICATION_PRODUCT. It makes sense that these two
permissions exclude each other as if you request validation then there is no point in you being able to validation the
request. Permission exclusions must always be circular. I.e A must exclude B and B must exclude A.

### Permission export

There is a package.json command to output the permissions to console.

`npm run permissions:export`

This was created as an output for Jean-Pierre.

## Installation

### Linting

This project uses the eslint linter. Please see the config at `.eslintrc.js`.

Please use ESLINT so that all of our code as a similar style.

### Host files

Add the following to /etc/hosts (only the first one is probably needed for Linux using the default `docker-compose.yml`):
```bash
127.0.0.1       sncf.local
127.0.0.1       api.timeline
127.0.0.1       host.timeline
127.0.0.1	      dev.api.intuiteev.io
```
### Clone the project
Run:
1. `git clone git@gitlab.mobilitybox.net:marketplace/architecture.git`

2. `cd architecture`

### Submodules.

Read all about submodule here:
https://git-scm.com/book/en/v2/Git-Tools-Submodules

This repository contains 4 separate projects which are git repos themselves:

1. marketplace
2. marketplace-api
3. event-manager
4. queue-system

Run the following commands to install the submodules.

1. `git submodule init`

2. `git submodule update`

### Running the Marketplace and related systems
There are two ways to get this project up and running:

1. Everything inside containers using `docker-compose`
2. Use an alternate `docker-compose` file which runs everything but `marketplace` and `marketplace-api` inside containers. You will have to get these up and running manually in separate terminals.

If you are using Linux then you should be ok with options #1. If you are on OSX you should probably use option #2. Why? Because there are some issues with watchers like Nodemon being used across networks. I.e watching from one container to another in OSX. By all means try both and see what works for you.

#### Containers

There is one container for each process/service:

##### Marketplace
1. Nodemon
2. Webpack
3. Gulp

##### Markeplace API
1. Nodemon

##### Databases
1. Mongodb (Used by the Workflow system)
2. MySQL (Used by the Marketplace and MP API)
3. Redis (Used by the Marketplace for sessions and the queue system for queues)

##### Workflow system (AKA Timeline System, AKA Event Manager)
1. Nodemon

##### Queue system
1. Core
2. Email worker
3. API worker

View the `docker-compose.yml` file for more detail on these services.

**Remember that if you want to set things up for OSX then you won't create so many containers. View `docker-compose.osx.yml`. The Marketplace and Marketplace API containers will not exist. You will run these processes yourself.**

#### Linux setup

`cd` to the root of `architecture` and then run `docker-compose up`

This should create all the container for you and run all the various watchers.

##### Troubleshooting

Sometimes the nodemon causes issues because the configuration of linux does not allow the amount of watchers needed. To solve it, you have to run this command:

`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

**Speak to Aaron or Miguel about this - it is still unclear to mewhether this is run on localhost or inside a container...**

#### OSX Setup

On OSX There are some issue with the watchers, for Webpack, Nodemon and Gulp. Therefore, there is an alternative `docker-compose` file which creates a reduced set of containers - basically everything except the Marketplace and Marketplace API. You will start their processes manually.

Create a link to the architecture configs from the Marketplace. In the root of architecture run:

`ln -s ABSOLUTE_PATH/config-files/marketplace/ ABSOLUTE_PATH/marketplace/src/server/config/files`

e.g:

`ln -s /Users/rupertrutland/apps/dd/architecture/config-files/marketplace/ /Users/rupertrutland/apps/dd/architecture/marketplace/src/server/config/files`

and the same for the marketplace api:

`ln -s ABSOLUTE_PATH/config-files/marketplace/ ABSOLUTE_PATH/marketplace-ap/src/configuration/files`

e.g:

`ln -s /Users/rupertrutland/apps/dd/architecture/config-files/marketplace/ /Users/rupertrutland/apps/dd/architecture/marketplace-api/src/configuration/files`

To start the rest of the containers, from the root of `architecture` run:

`docker-compose -f docker-compose.osx.yml up`

And to stop the processes:

`docker-compose -f docker-compose.osx.yml down`

This will get all the containers mentioned above running except Marketplace and Marketplace API.

You should end up with the following containers running in docker:

Pay attention to the ports assigned with the format:

 `[localhost]:[local_port]->[container_port]/tcp` or `[container_port]/tcp`

```bash
1. architecture_event-manager-back  0.0.0.0:5013->3000/tcp
2. architecture_queue-worker_email
3. architecture_queue-worker_api
4. architecture_queue-core          2725/tcp
5. architecture_queue-api           0.0.0.0:5014->3000/tcp
6. redis                            0.0.0.0:6379->6379/tcp
7. mysql                            0.0.0.0:3307->3306/tcp
8. mongo                            0.0.0.0:27017->27017/tcp
```

**For now we will leave the queue system inside the docker set up but you may want to run it separately too if you need to develop it actively.**

You will then need to start 3 processes in separate terminals but before you do you will need to adjust your configs files.

##### Adjusting the main config file

For Marketplace and the API you will have to add the following config to:

`architecture/config-files/marketplace/default/config.local.json`.

This will allow the Marketplace to access MySQL (to be removed and used only in Marketplace API) and Redis correctly.
```json
{
  "database": {
    "host": "localhost",
    "user": "root",
    "password": "marketplace",
    "port": "3307"
  },
  "redis": {
    "host": "localhost"
  },
  "workflow": {
    "disabled": false,
    "endpoint" : {
      "api" : {
        "url": "http://localhost:5013/api/"
      }
    }
  },
  "marketplace_api":{
    "endpoint" : "http://localhost:10010/",
    "public_endpoint" : "http://localhost:10010/"
  },
  "setup_type": "osx"
}
```


#### Commands to run:

##### Marketplace API

N.B. Make sure you start the API before the Marketplace

1. `npm run start:dev:osx`

##### Marketplace:

1. `npm run start:dev:osx`
2. `npm run watch-gulp`

**N.B. The endpoint for the API is `http://localhost:10010/` - see the nodemon.json**

### Useful documents:

1. Technical Overview https://docs.google.com/document/d/1VUpmDxDYea8EoG_sth0NI7w13eDuUcb2BwgbPUxjJ3U/edit#

2. Optimisations https://docs.google.com/document/d/19kYm7XSSR6W2hIpxM6w7YSHSuhwKCg-36pRJW_PnhMI/edit

3. Request Optimisations https://docs.google.com/spreadsheets/d/1XywBrWRBpIxMoBhufxk3Us_c676glRhRXxsvaAq5adU/edit#gid=0

## TODO:

1. Remove gulp and move sass processing into webpack
2. Remove API V01 and migrate all functionality to API V01
3. Remove unused node dependencies

## Pitfalls

### FormattedMessage

Watch out when putting a variable in the id field of a formatted message. If the value is not what you expected it could break things...

You could use this regex to serach through the project for instances where a variable has been used:

`FormattedMessage id=\{[^']+`
