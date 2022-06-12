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
   await queryInterface.bulkInsert("user_game_biodata", [
    {
      user_game_id: 1,
      hobby: "Nonton film",
      favorite_game: "Mobile Legends"
    },
    {
      user_game_id: 2,
      hobby: "Bersepeda",
      favorite_game: "PUBG"
    },
    {
      user_game_id: 3,
      hobby: "Memasak",
      favorite_game: "Valorant"
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
    await queryInterface.bulkDelete("user_game_biodata", null, {});
  }
};
