'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rack_Bet', [
      {
        rack_id: 1, 
        event_shark_id: 1, 
        bettor_id: 1, 
        amount: 100.00, 
        payout_odds: 2.5,
        payout: 250.00,
        rake: 25.00, 
        winner: true, 
        date_reward: new Date('2023-08-15'),
        raked_amount: 25.00, 
        date_refunded: null,
        starting_balance: 500.00, 
        ending_balance: 725.00, 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        rack_id: 2,
        event_shark_id: 2,
        bettor_id: 2,
        amount: 75.00,
        payout_odds: 3.0,
        payout: 225.00,
        rake: 22.50,
        winner: false,
        date_reward: new Date('2023-08-20'),
        raked_amount: 22.50,
        date_refunded: null,
        starting_balance: 600.00,
        ending_balance: 602.50,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  export const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Rack_Bet', null, {});
  }

