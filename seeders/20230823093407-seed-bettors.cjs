'use strict';
const { bulkInsert, bulkDelete } = require('../database/index.js');


  export const up = async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bettors', [
      {
        user_name: 'bettor1', 
        email: 'bettor1@example.com', 
        enabled: 1,
        password: 'password1', 
        id_type: 'ID Type 1', 
        id_number: 'ID Number 1', 
        file_address: 'File Address 1', 
        last_login: new Date(),
        confirmation_token: 'token1', 
        password_requested_at: new Date(),
        first_name: 'First Name 1', 
        middle_name: 'Middle Name 1',
        last_name: 'Last Name 1',
        banned: 0, 
        birthdate: new Date(),
        address: 'Address 1', 
        id_type: 'ID Type 1', 
        id_number: 'ID Number 1', 
        id_file_address: 'ID File Address 1', 
        source_of_income: 'Income Source 1', 
        facebook_url: 'https://facebook.com/bettor1', 
        security_question: 'Security Question 1', 
        security_answer: 'Security Answer 1', 
        date_created: new Date(),
        date_updated: new Date(),
      },
      {
        user_name: 'bettor2',
        email: 'bettor2@example.com',
        enabled: 1,
        password: 'password2',
        id_type: 'ID Type 2',
        id_number: 'ID Number 2',
        file_address: 'File Address 2',
        last_login: new Date(),
        confirmation_token: 'token2',
        password_requested_at: new Date(),
        first_name: 'First Name 2',
        middle_name: 'Middle Name 2',
        last_name: 'Last Name 2',
        banned: 0,
        birthdate: new Date(),
        address: 'Address 2',
        id_type: 'ID Type 2',
        id_number: 'ID Number 2',
        id_file_address: 'ID File Address 2',
        source_of_income: 'Income Source 2',
        facebook_url: 'https://facebook.com/bettor2',
        security_question: 'Security Question 2',
        security_answer: 'Security Answer 2',
        date_created: new Date(),
        date_updated: new Date(),
      },

    ]);
  }

 export const down = async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Bettors', null, {});
  }
