'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agent_Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_agent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Agents",
          key: 'id'
        }
      },
      child_agent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Agents",
          key: 'id'
        }
      },
      type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL(10,2)
      },
      status: {
        type: Sequelize.SMALLINT(6)
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
    await queryInterface.dropTable('Agent_Transactions');
  }
};