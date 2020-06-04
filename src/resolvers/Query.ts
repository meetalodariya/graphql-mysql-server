export default {
  async organizations(parent, args, { Organization }, info) {},
  async organization(parent, args, { Organization }, info) {
    const organization = await Organization.findOne({
      where: { username: args.username },
    });
    if (!organization) {
      throw new Error("No organization found of that username");
    }
    return organization;
  },
};
