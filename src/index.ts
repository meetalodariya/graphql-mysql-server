import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Organization from "./models/organization";
import * as db from "./models/index";

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
