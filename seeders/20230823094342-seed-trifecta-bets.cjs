'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trifecta_Bet', [
      {
        bettor_id: 1,
        trifecta_id: 1, 
        type: 1, 
        first: 2, 
        second: 3, 
        third: 4, 
        amount: 100.00,
        winner: 2,
        payout: 200.00,
        date_rewarded: new Date('2023-08-20'), 
        rake: 10.00, 
        raked_amount: 90.00, 
        starting_balance: 500.00, 
        ending_balance: 590.00, 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        bettor_id: 2,
        trifecta_id: 2,
        type: 2,
        first: 4,
        second: 1,
        third: 2,
        amount: 50.00,
        winner: 4,
        payout: 100.00,
        date_rewarded: new Date('2023-08-21'),
        rake: 5.00,
        raked_amount: 45.00,
        starting_balance: 300.00,
        ending_balance: 345.00,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Trifecta_Bet', null, {});
  }

