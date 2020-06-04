const sequelize = require("./index").sequelize;
const Sequelize = require("./index").Sequelize;

module.exports = sequelize.define(
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
  },
  {
    timestamps: true,
    createdAt: "creationDate",
    updatedAt: "updateDate",
  }
);
