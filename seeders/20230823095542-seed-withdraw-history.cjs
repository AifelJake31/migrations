'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Withdraw_History', [
      {
        agent_id: 1, 
        type: 1, 
        request_status: 2, 
        before_source: 500.00,
        amount: 100.00, 
        after_source: 400.00, 
        remarks: 'Withdrawal request approved.',
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        agent_id: 2,
        type: 2,
        request_status: 1,
        before_source: 750.00,
        amount: 200.00,
        after_source: 550.00,
        remarks: 'Withdrawal request pending approval.',
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  export const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Withdraw_History', null, {});
  }
