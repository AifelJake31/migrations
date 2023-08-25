'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');


  export const up= async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [
      {
        arena_id: 1, 
        name: 'Event 1', 
        short_name: 'E1', 
        event_time: new Date('2023-08-15T10:00:00Z'), 
        open_event_time: new Date('2023-08-15T09:30:00Z'), 
        end_event_time: new Date('2023-08-15T12:00:00Z'), 
        video_url: 'https://example.com/event1', 
        created_by_id: 1, 
        active: true,
        enable_trifecta: true, 
        type: 1, 
        number_of_sharks: 6, 
        status: 1, 
        max_wins: 3, 
        enable_event_booking: true, 
        enable_quadfecta: true, 
        enable_superfecta: true, 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        arena_id: 2,
        name: 'Event 2',
        short_name: 'E2',
        event_time: new Date('2023-08-20T14:00:00Z'),
        open_event_time: new Date('2023-08-20T13:30:00Z'),
        end_event_time: new Date('2023-08-20T16:30:00Z'),
        video_url: 'https://example.com/event2',
        created_by_id: 2,
        active: true,
        enable_trifecta: false,
        type: 2,
        number_of_sharks: 8,
        status: 1,
        max_wins: 4,
        enable_event_booking: false,
        enable_quadfecta: true,
        enable_superfecta: false,
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

  export const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Events', null, {});
  }
