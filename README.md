# 🦋 Butterfly app

Butterly app is an app that allows you to view butterflies!

It consists of 2 parts:
- **backend** *(REST API built via express)*
- **frontend** *(SPA built via React)*

Project is written on **Typescript**

## Backend

Backend is an REST API server that based on top o ExpressJS framework. For database we use Postgres. As DB client we use Knex query builder (https://knexjs.org/). All code related to the backend is placed in `server` folder.<br/>
For now REST API provides single endpoint:
```
GET /butterfiles
```
It returns list of butterfiles (check butterfly schema in `server/controllers/butterfly/types.ts`)

## Frontend

Frontend is an SPA built on top of React. For routing we use `react-router-dom` lib. All code related to the frontend is placed in `fe` folder.

## Setup

**1. Install dependencies**
```sh
npm install
```

**2. Create database** (for that you need `docker` and `docker-compose` to be installed on your machine)
```sh
npm run db:init
```
Command above will spin up postgres docker image on your machine (for more details check `server/docker-compose.yaml`), apply migrations from `migrations` folder and apply seeds from `seeds` folder

**3. Run server**
```sh
npm run server:dev
```
Command above will build server source code and run it via nodemon. Nodemon listen for changes in `server` folder (for mre details check `nodemon.json`)

**4. Run frontend**
```sh
npm run fe:dev
```
Command above will run frontend app via `webpack-dev-server` and it will be available on `http://localhost:3000`

## Task

Current app is very primitive, it's only allows you to view butterflies. We want to have ability to **create/delete** butterfiles
### Requirements
1. Add endpoint to the server `POST /butterfiles/create`
  It should validate provided payload and throw corresponded error if validation didn't pass. If payload is correct it should try to add new record to the database.
2. Implement butterfly upsert form on the frontend. It should be available on `http://localhost:3000/create`
3. Add endpoint to the server `DELETE /butterfiles/:id`
  It should check that butterfly with provided ID exists. Delete butterfly with provided ID.
4. Add **delete** button to the butterfly card. When button is clicked it should ask user confirmation.

### Bonus task
Implement **wishlist** functionality. Add ability to add butterfiles to the wishlist and then view wishlist on the sepparate page, e.g: `http://localhost:3000/wishlist`

### What we're looking for
* Your code should be extensible and reusable
* Your code should be tidy and adhere to conventions
* Your changes should be well-scoped and explained in the write-up
* Your write-up should be thoughtful and coherent

❗️ If you have any questions or concerns, please do not hesitate to contact us!

## Development
Both backend and frontend are built and running in development mode. To run them both you can launch backend/frontend servers on the separate terminals. In the first terminal run server `npm run server:dev`. In the second terminal run frontend `nnpm run fe:dev`

If you want add new DB migration run next command:
```sh
npm run db:migrate:create [migration_name]
```
It will generate new migration template in `migrations` folder. To apply migrations run:
```sh
npm run db:migrate:up
```

To add new seeds file run next command:
```sh
npm run db:seed:create [seed_name]
```
It will generate new seeds template in `seeds` folder. To apply seeds run:
```sh
npm run db:seed:run
```

## Notes
In general you can use any technology/tool that you want. E.g CSS pre/post processors, state managers, query-builders/ORM ...etc. If you want to change existing code - please do :) 