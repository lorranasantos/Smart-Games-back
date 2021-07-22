'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("store", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude:{
        type: Sequelize.DOUBLE,
        allowNull:false
      },
      longitude:{
        type: Sequelize.DOUBLE,
        allowNull:false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("store");
  }
};
