import "newrelic";
import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Organization from "./models/organization";
import DocuSign from "./models/docusign";
import Dropbox from "./models/dropbox";
import * as db from "./models/index";

// @ts-ignore
Organization.hasOne(DocuSign, { foreignKey: "organizationId" });
// @ts-ignore
Organization.hasOne(Dropbox, { foreignKey: "organizationId" });

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
