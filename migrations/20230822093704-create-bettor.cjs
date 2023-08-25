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
        allowNull: false,
        references: {
          model: 'Agents',
          key: "id"
        }
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enabled: {
        type: Sequelize.SMALLINT(1),
        allowNull: false,
        defaultValue: 0
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      id_type: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      id_number: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      file_address: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      last_login: {
        allowNull: false,
        type: Sequelize.DATE
      },
      confirmation_token: {
        type: Sequelize.STRING(255)
      },
      password_requested_at: {
        type: Sequelize.DATE
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      middle_name: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      last_name: {
        allowNull: false,
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
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      id_file_address: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      source_of_income: {
        allowNull: false,
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
      }
    });

    

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bettors');
  }
};
