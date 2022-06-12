'use strict';
const {
  Model
} = require('sequelize');
const user_game = require('./user_game');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game_history.belongsTo(models.user_game_biodata, {foreignKey: "id_game_history", as: "history" });
    }
  };
  user_game_history.init({
    id_game_history: DataTypes.INTEGER,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_history',
    timestamps: false
  });
  return user_game_history;
};