'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Agents', [
      {
        parent_id: null, 
        username: 'Agent1',
        email: 'agent1@example.com', 
        password: 'password1', 
        last_login: new Date(),
        mobile_number: '1234567890', 
        level: 1,
        enabled: true,
        points: 0,
        commission: 0.0, 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        parent_id: null,
        username: 'Agent2',
        email: 'agent2@example.com',
        password: 'password2',
        last_login: new Date(),
        mobile_number: '9876543210',
        level: 2,
        enabled: true,
        points: 0,
        commission: 0.0,
        date_created: new Date(),
        date_updated: new Date(),
      },
      // Add more records as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Agents', null, {});
  },
};
