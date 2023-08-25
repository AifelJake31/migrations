'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up= async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pick_One_Bet', [
      {
        bettor_id: 1, 
        pick_one_id: 1, 
        event_shark_id: 1,
        email: 'bettor1@example.com', 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        bettor_id: 2,
        pick_one_id: 2,
        event_shark_id: 2,
        email: 'bettor2@example.com',
        date_created: new Date(),
        date_updated: new Date(),
      },
      // Add more records as needed
    ]);
  }

  export const down= async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Pick_One_Bet', null, {});
  }
