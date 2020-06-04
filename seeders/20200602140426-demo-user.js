"use strict";
const uuid = require("uuid").v4;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "organizations",
      [
        {
          uuid: uuid(),
          name: "John",
          username: "johndoe1234",
          password: "123456",
          creationDate: new Date(),
          updateDate: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
