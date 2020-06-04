const GraphQLServer = require("graphql-yoga").GraphQLServer;
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Organization = require("./models/organization");
const db = require("./models/index.js");

db.sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    const server = new GraphQLServer({
      typeDefs: "./schema.graphql",
      resolvers: {
        Query,
        Mutation,
      },
      context: { Organization },
    });
    server.start((config) => {
      console.log("started at http://localhost:" + config.port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
