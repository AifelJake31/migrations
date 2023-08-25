'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');


  const up=  async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Commission_Histories', [
      {
        agent_id: 1, 
        rack_bet_id: 1,
        type: 1, 
        gold_commission: 100.00, 
        silver_commission: 50.00, 
        master_commission: 25.00, 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        agent_id: 2,
        rack_bet_id: 2,
        type: 2,
        gold_commission: 150.00,
        silver_commission: 75.00,
        master_commission: 37.50,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

 const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Commission_Histories', null, {});
  }

