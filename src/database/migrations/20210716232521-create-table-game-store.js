'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("game_store", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      game_quantity:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "game",
          key: "id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "store",
          key: "id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_store");
  }
};
