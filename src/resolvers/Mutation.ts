import { uuid } from "uuidv4";
import HttpError from "../exceptions/http-error";

export default {
  async createOrganization(parent, { data }, { models }, info) {
    const organization = await models.Organization.create({
      uuid: uuid(),
      name: data.name,
      password: data.password,
      username: data.username,
    });
    return organization;
  },
  async createEmployee(parent, { data }, { models, logger, req }, info) {
    try {
      const employee = await models.Employee.create({
        uuid: uuid(),
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        companyEmail: data.companyEmail,
        companyEmployeeId: data.companyEmployeeId,
        personalEmail: data.personalEmail,
        companyPhone: data.companyPhone,
        personalPhone: data.personalPhone,
        notes: data.notes,
        organizationId: data.organizationId,
      });
      return employee;
    } catch (err) {
      if (!(err instanceof HttpError)) {
        err.statusCode = 500;
      }
      logger[err.level || "error"](err, req);
      throw err;
    }
  },
};
