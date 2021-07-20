'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('store',
    [
      {
        place: 'Tamboré'
      },
      {
        place: 'União'
      },
      {
        place: 'Iguatemi'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('store', null);
  }
};
