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
   queryInterface.bulkInsert("user_game_histories", [
     {
       id_game_history: 1,
       result: "Menang"
     },
     {
       id_game_history: 2,
       result: "Kalah"
     },
     {
       id_game_history: 3,
       result: "Menang"
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
    await queryInterface.bulkDelete("user_game_histories", null, {});
  }
};
