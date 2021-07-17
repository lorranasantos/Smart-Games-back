'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("game_plataform", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      plataform_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "plataform",
          key: "id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("game_plataform");
  }
};
