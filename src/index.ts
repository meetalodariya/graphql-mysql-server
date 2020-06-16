import "newrelic";
import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Organization from "./models/organization";
import DocuSign from "./models/docusign";
import Dropbox from "./models/dropbox";
import * as db from "./models/index";
import logger from "@sorthr/hr-logger";

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
      context: ({ request, response }) => {
        const req = {
          method: request.method,
          originalUrl: request.url,
          startTime: new Date(),
        };
        return { Organization, logger, req };
      },
    });
    server.start((config) => {
      logger.warn("started at http://localhost:" + config.port);
    });
  })
  .catch((err) => {
    logger.warn(err.message);
  });
