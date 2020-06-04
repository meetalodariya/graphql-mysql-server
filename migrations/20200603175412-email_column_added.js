"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("organizations", "email", Sequelize.STRING),
      queryInterface.addConstraint("organizations", {
        fields: ["email"],
        type: "unique",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("organizations", "email");
  },
};
