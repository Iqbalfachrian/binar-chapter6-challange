'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("user_games", [
     {
       name: "Iqbal",
       age: 20,
       address: "Jakarta Selatan"
     },
     {
      name: "Fachri",
      age: 22,
      address: "Jakarta Barat"
    },
    {
      name: "Puput",
      age: 21,
      address: "Jakarta Timur"
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user_games", null, {});
  }
};
