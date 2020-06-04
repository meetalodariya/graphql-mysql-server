"use strict";
import path from "path";
import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "development";
const configPath = path.join(__dirname, "..", "..", "/config/config.json");
const config = require(configPath)[env];

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export { sequelize, Sequelize };
