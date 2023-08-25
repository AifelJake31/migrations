'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trifecta', [
      {
        event_id: 1,
        first: 2,
        second: 3, 
        third: 4, 
        date_awarded: new Date('2023-08-20'), 
        hit: true, 
        net_pool: 1000.00, 
        net_pool_rambol: 500.00, 
        net_pool_jackpot: 300.00, 
        net_pool_super_jackpot: 200.00, 
        hit_rambol: false,
        hit_jackpot: true,
        hit_super_jackpot: false,
        initial_net_pool: 1500.00, 
        initial_net_pool_rambol: 750.00, 
        initial_net_pool_jackpot: 450.00, 
        initial_net_pool_super_jackpot: 300.00,
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        event_id: 2,
        first: 4,
        second: 1,
        third: 2,
        date_awarded: new Date('2023-08-21'),
        hit: false,
        net_pool: 800.00,
        net_pool_rambol: 400.00,
        net_pool_jackpot: 240.00,
        net_pool_super_jackpot: 160.00,
        hit_rambol: true,
        hit_jackpot: false,
        hit_super_jackpot: true,
        initial_net_pool: 1200.00,
        initial_net_pool_rambol: 600.00,
        initial_net_pool_jackpot: 360.00,
        initial_net_pool_super_jackpot: 240.00,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  export const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Trifecta', null, {});
  }

