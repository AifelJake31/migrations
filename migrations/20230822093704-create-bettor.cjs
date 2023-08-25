'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bettors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Agents',
          key: "id"
        }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isUsernameValid(value) {
          const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/;
            if (!usernameRegex.test(value)) {
              throw new Error('Invalid username format. Username should be at least 6 to 20 characters without special characters other than underscore (_)')
            }
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      enabled: {
        type: Sequelize.SMALLINT(1),
        allowNull: true,
        defaultValue: 0
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      id_type: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      id_number: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      file_address: {
        type: Sequelize.TEXT('long'),
        allowNull: true
      },
      last_login: {
        allowNull: true,
        type: Sequelize.DATE
      },
      confirmation_token: {
        type: Sequelize.STRING(255)
      },
      password_requested_at: {
        type: Sequelize.DATE
      },
      first_name: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      middle_name: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      last_name: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      banned:{
        type: Sequelize.INTEGER
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      address: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      id_file_address: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      source_of_income: {
        allowNull: true,
        type: Sequelize.STRING(64)
      },
      facebook_url: {
        allowNull: true,
        type: Sequelize.TEXT('long')
      },
      security_question: {
        type: Sequelize.TEXT('long')
      },
      security_answer: {
        type: Sequelize.TEXT('long')
      },
      date_created: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'createdAt',
      },
      date_updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        field: 'updatedAt',
      },
      mobileNumber: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
        isMobileNumber(value) {
          const mobileRegex = /^\+639\d{9}$/;
          if (!mobileRegex.test(value)) {
            throw new Error('Invalid Philippine mobile number format. Mobile number should start with "+639" followed by the 9-digit number.')
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bettors');
  }
};