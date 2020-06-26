"use strict";

const { uuid } = require("uuidv4");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Organizations",
      [
        {
          uuid: uuid(),
          name: "john",
          username: "doe",
          companyEmail: "johndoe@gmail.com",
          password:
            "$2b$12$gHLVyK5dl7FP12BW1c31COAO/6I550.UdU8hV2ZVCA1Clh42R9gxC", // 123456
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
