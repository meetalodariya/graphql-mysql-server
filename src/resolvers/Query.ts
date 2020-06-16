import HttpError from "../exceptions/http-error";
export default {
  async organizations(parent, args, { Organization, logger }, info) {},
  async organization(parent, args, { Organization, logger, req }, info) {
    try {
      const organization = await Organization.findOne({
        where: { username: args.username },
      });
      if (!organization) {
        const err = new HttpError("No organization found of that username");
        err.statusCode = 401;
        err.level = "info";
        throw err;
      }
      return organization;
    } catch (err) {
      if (!(err instanceof HttpError)) {
        err.statusCode = 500;
      }
      logger[err.level || "error"](err, req);
      throw err;
    }
  },
};
