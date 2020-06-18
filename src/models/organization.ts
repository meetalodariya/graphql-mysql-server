import * as Sequelize from "sequelize";
import { sequelize } from "./index";

export default sequelize.define(
  "Organization",
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
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    username: {
      unique: true,
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      unique: true,
    },
  },
  {
    timestamps: true,
    createdAt: "creationDate",
    updatedAt: "updateDate",
  }
);
