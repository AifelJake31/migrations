'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up= async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pick_One', [
      {
        event_id: 1, 
        number_of_sharks: 6,
        race_to: 3,
        status: 1,
        date_awarded: new Date('2023-08-15'), 
        pool: 5000.00, 
        net_pool: 4500.00, 
        rake: 500.00, 
        shark_winner_id: 1, 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        event_id: 2,
        number_of_sharks: 8,
        race_to: 4,
        status: 2,
        date_awarded: new Date('2023-08-20'),
        pool: 750.00,
        net_pool: 680.00,
        rake: 70.00,
        shark_winner_id: 2,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  export const down= async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Pick_One', null, {});
  }

