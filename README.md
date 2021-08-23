# Vue Mongo Express Boilerplate

## Project setup

```js
// Create env variables ( .env in root )
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

// Config your mongo database names -- server/mongodb/mongo.js Line 26
return client.db("database_name").collection("collection_name");

//  Install dependencies (server & client)
yarn install

// Run Backend Server
yarn start
or
yarn dev

// Run Frontend Server
cd client
yarn serve

```
