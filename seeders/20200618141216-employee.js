"use strict";

const { uuid } = require("uuidv4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Employees",
      [
        {
          uuid: uuid(),
          firstName: "john",
          lastName: "doe",
          companyEmail: "johndoe@gmail.com",
          password: "asdfasdkfja",
          notes: "asjdhfauifhas",
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
