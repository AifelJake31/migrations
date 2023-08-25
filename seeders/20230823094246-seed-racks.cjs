'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');

  export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rack', [
      {
        event_id: 1, 
        first_event_shark_id: 1, 
        second_event_shark_id: 2, 
        sequence: 1, 
        date_start: new Date('2023-08-15'), 
        date_end: new Date('2023-08-16'),
        date_book_start: new Date('2023-08-10'),
        date_book_end: new Date('2023-08-14'),
        first_shark_bookings: 500.00, 
        first_shark_payout: 600.00, 
        second_shark_bookings: 600.00,
        second_shark_payout: 500.00, 
        date_reward: new Date('2023-08-17'),
        first_shark_rake: 50.00,
        second_shark_rake: 60.00, 
        first_shark_net_bookings: 450.00,
        second_shark_net_bookings: 540.00, 
        first_shark_odds: 2.0, 
        second_shark_odds: 1.8, 
        pool: 1000.00, 
        net_pool: 990.00, 
        pool_rake: 10.00, 
        redirect: false,
        date_refunded: null, 
        queue: 'Queue A',
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        event_id: 2,
        first_event_shark_id: 3,
        second_event_shark_id: 4,
        sequence: 2,
        date_start: new Date('2023-08-20'),
        date_end: new Date('2023-08-21'),
        date_book_start: new Date('2023-08-15'),
        date_book_end: new Date('2023-08-19'),
        first_shark_bookings: 800.00,
        first_shark_payout: 900.00,
        second_shark_bookings: 900.00,
        second_shark_payout: 800.00,
        date_reward: new Date('2023-08-22'),
        first_shark_rake: 90.00,
        second_shark_rake: 80.00,
        first_shark_net_bookings: 710.00,
        second_shark_net_bookings: 820.00,
        first_shark_odds: 2.5,
        second_shark_odds: 2.0,
        pool: 1500.00,
        net_pool: 1400.00,
        pool_rake: 100.00,
        redirect: true,
        date_refunded: null,
        queue: 'Queue B',
        date_created: new Date(),
        date_updated: new Date(),
      },
  
    ]);
  }

 export const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Rack', null, {});
  }
