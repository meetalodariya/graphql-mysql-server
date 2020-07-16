import { sequelize } from ".";
import Sequelize from "sequelize";

export default sequelize.define(
  "Templates",
  {
    templateId: {
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
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    templateHtml: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    organizationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "creationDate",
    updatedAt: "updateDate",
  }
);
