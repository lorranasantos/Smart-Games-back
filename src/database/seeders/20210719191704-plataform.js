'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('plataform', 
      [
        {
          name: 'PC',
        },
        {
          name: 'PS4',
        },
        {
          name: 'XBoxOne',
        },
        {
          name: 'Switch',
        },
        {
          name: 'Wiiu',
        },
        {
          name: 'PS2',
        },
        {
          name: 'XBOX',
        },
        {
          name: 'PS3',
        }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkDelete('plataform', null);
    
  }
};
