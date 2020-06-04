import { uuid } from "uuidv4";

export default {
  async createOrganization(parent, { data }, { Organization }, info) {
    const organization = await Organization.create({
      uuid: uuid(),
      name: data.name,
      password: data.password,
      username: data.username,
    });
    return organization;
  },
};
