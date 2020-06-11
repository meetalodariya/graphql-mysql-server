import * as Sequelize from "sequelize";
import { sequelize } from "./index";
import Organization from "./organization";
export default sequelize.define(
  "DocuSign",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    uuid: {
      type: Sequelize.UUID,
      unique: true,
    },
    accountId: {
      unique: true,
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    integrationKey: {
      unique: true,
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    secretKey: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    authorization: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    refreshToken: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    accessToken: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    organizationId: {
      type: Sequelize.INTEGER,
      references: {
        model: Organization,
        key: "id",
      },
    },
  },
  {
    tableName: "DocuSign",
  }
);
