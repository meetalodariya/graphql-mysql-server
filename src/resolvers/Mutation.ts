import { uuid } from "uuidv4";

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
    const employee = await models.Employee.create({
      uuid: uuid(),
      firstName: data.firstName,
      lastName: data.lastName,
      companyEmail: data.companyEmail,
      password: data.password,
      notes: data.notes,
    });
    console.log(employee);
    return employee;
  },
};
