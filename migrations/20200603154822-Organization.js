"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn("organizations", "name", "orgName"),
      queryInterface.renameColumn("organizations", "password", "passWord"),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn("organizations", "orgName", "name"),
      queryInterface.renameColumn("organizations", "passWord", "password"),
    ]);
  },
};
