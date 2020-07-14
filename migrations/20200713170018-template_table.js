"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Templates", {
      templateId: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      uuid: {
        type: Sequelize.UUID,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: false,
      },
      payload: {
        type: Sequelize.STRING(255),
        defaultValue: null,
        allowNull: false,
      },
      organization: {
        type: Sequelize.INTEGER,
        references: {
          model: "Organizations",
          key: "id",
        },
      },
      creationDate: Sequelize.DATE,
      updateDate: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Templates");
  },
};
