import * as Sequelize from "sequelize";
import { sequelize } from "./index";

export default sequelize.define(
  "Employee",
  {
    employeeId: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    uuid: {
      type: Sequelize.UUID,
      unique: true,
      allowNull: false,
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
      allowNull: true,
      defaultValue: null,
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
  },
  {
    timestamps: true,
    createdAt: "creationDate",
    updatedAt: "updateDate",
  }
);
