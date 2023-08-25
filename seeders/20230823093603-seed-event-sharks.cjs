'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');


  const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Event_Sharks', [
      {
        shark_id: 1, 
        event_id: 1,
        sequence: 1,
        wins: 2,
        date_last_win: new Date('2023-08-01'), 
        date_recent_win: new Date('2023-08-15'), 
        handicap: 3,
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        shark_id: 2,
        event_id: 1,
        sequence: 2,
        wins: 1,
        date_last_win: new Date('2023-07-20'),
        date_recent_win: new Date('2023-08-10'),
        handicap: 2,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Event_Sharks', null, {});
  }
