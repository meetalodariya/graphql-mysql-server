# GraphQL-DB Server

## Getting Started

Following instructions will help you to set up this project on your local
machine.

## Installation

first run this command to install all required node modules :

```sh
$ npm install
```

# Configuration

configure **./config/config.json** file with your local mysql configuration:

```sh
{
"development": {
"username": "",  // Your db username
"password": "", // Your db password
"database": "sortHR",
"host": "localhost",
"dialect": "mysql",
"operatorsAliases": false
},
...
...
}
```

If you haven't created the database in your machine, you can create one with specified values from **config.json** file by running:

```sh
$ npx sequelize db:create
```

# Running Database Migrations

You can run migration scripts by following command:

```sh
$ npx sequelize db:migrate
```

For reverting migrations:

```sh
$ npx sequelize db:migrate:undo
```

To populate the database with test data run :

```sh
$ npx sequelize db:seed:all
```

# Usage

Start your development server by running this command:

```sh
$ npm run dev
```

With this command a GraphQL playground will be started on localhost
(usually on port 4000 you can check terminal log for the port number)

# Running the tests

for running the tests use following command:

```sh
$ npm test
```
