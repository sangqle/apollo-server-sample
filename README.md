**This is sample config Gaphql API with apollo-server**

How to run ?

```bash
$ git clone https://github.com/littlemonster00/apollo-server-sample.git
$ yarn

```

Run prisma server and postgres database via docker

```bash
$ docker-compose up
$ yarn deploy
$ yarn start
```

You can access prisma API server via: http://localhost:4466/server/dev

You can visualization data of postgres db via: http://localhost:4466/server/dev/_admin

## Environments
This Compose file contains the following environment variables:

* `POSTGRES_USER` the default value is **postgres**
* `POSTGRES_PASSWORD` the default value is **changeme**
* `PGADMIN_PORT` the default value is **5050**
* `PGADMIN_DEFAULT_EMAIL` the default value is **pgadmin4@pgadmin.org**
* `PGADMIN_DEFAULT_PASSWORD` the default value is **admin**

## Access to postgres: 
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** changeme (as a default)

## Access to PgAdmin: 
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)