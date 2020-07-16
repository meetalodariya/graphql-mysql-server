import "newrelic";
import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Organization from "./models/organization";
import DocuSign from "./models/docusign";
import Dropbox from "./models/dropbox";
import { sequelize } from "./models/index";
import logger from "@sorthr/hr-logger";
import Employee from "./models/employee";
import Template from "./models/template";

// @ts-ignore
Organization.hasOne(DocuSign, { foreignKey: "organizationId" });
// @ts-ignore
Organization.hasOne(Dropbox, { foreignKey: "organizationId" });
// @ts-ignore
Organization.hasMany(Template, { foreignKey: "organizationId" });
// @ts-ignore
Employee.belongsTo(Organization, { foreignKey: "organizationId" });

const models = {
  Organization,
  Employee,
  Template,
};

sequelize
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
        return { models, logger, req };
      },
    });
    server.start((config) => {
      logger.warn("started at http://localhost:" + config.port);
    });
  })
  .catch((err) => {
    logger.warn(err.message);
  });
