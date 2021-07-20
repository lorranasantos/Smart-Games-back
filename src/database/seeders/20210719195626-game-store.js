'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('game_store', 
    [
      {
        game_id: 1,
        store_id: 1,
        game_quantity: '25'
      },
      {
        game_id: 1,
        store_id: 2,
        game_quantity: '18'
      },
      {
        game_id: 2,
        store_id: 1,
        game_quantity: '15'
      },
      {
        game_id: 2,
        store_id: 2,
        game_quantity: '21'
      },
      {
        game_id: 2,
        store_id: 3,
        game_quantity: '9'
      },
      {
        game_id: 3,
        store_id: 1,
        game_quantity: '32'
      },
      {
        game_id: 3,
        store_id: 2,
        game_quantity: '29'
      },
      {
        game_id: 4,
        store_id: 2,
        game_quantity: '27'
      },
      {
        game_id: 4,
        store_id: 3,
        game_quantity: '18'
      },
      {
        game_id: 5,
        store_id: 1,
        game_quantity: '25'
      },
      {
        game_id: 5,
        store_id: 2,
        game_quantity: '14'
      },
      {
        game_id: 5,
        store_id: 3,
        game_quantity: '36'
      },
      {
        game_id: 6,
        store_id: 2,
        game_quantity: '22'
      },
      {
        game_id: 6,
        store_id: 3,
        game_quantity: '23'
      },
      {
        game_id: 7,
        store_id: 1,
        game_quantity: '18'
      },
      {
        game_id: 7,
        store_id: 2,
        game_quantity: '26'
      },
      {
        game_id: 8,
        store_id: 1,
        game_quantity: '24'
      },
      {
        game_id: 8,
        store_id: 2,
        game_quantity: '14'
      },
      {
        game_id: 8,
        store_id: 3,
        game_quantity: '36'
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('game_store', null);
    
  }
};
