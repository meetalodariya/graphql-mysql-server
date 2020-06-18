"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Organizations", "email", Sequelize.STRING),
      queryInterface.addConstraint("Organizations", {
        fields: ["email"],
        type: "unique",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("organizations", "email");
  },
};
