"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Employees", {
      employeeId: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      uuid: {
        type: Sequelize.UUID,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      lastName: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      companyEmail: {
        unique: true,
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      companyEmployeeId: {
        unique: true,
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      personalEmail: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      companyPhone: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      personalPhone: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      notes: {
        type: Sequelize.TEXT,
        defaultValue: null,
      },
      organizationId: {
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
    return queryInterface.dropTable("Employees");
  },
};
