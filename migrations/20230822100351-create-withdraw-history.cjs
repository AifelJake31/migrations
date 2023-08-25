'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Withdraw_Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agent_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Agents',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.INTEGER
      },
      request_status: {
        type: Sequelize.INTEGER
      },
      before_source: {
        type: Sequelize.INTEGER(9,2)
      },
      amount: {
        type: Sequelize.INTEGER(9,2)
      },
      after_source: {
        type: Sequelize.INTEGER(9,2)
      },
      remarks: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Withdraw_Histories');
  }
};