'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Commission_Histories', {
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
          model: "Agents",
          key: "id"
        }
      },
      rack_bet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Rack_Bets",
          key: "id"
        }
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      gold_commission: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: true,
      },
      silver_commission: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: true,
      },
      master_commission: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: true,
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
    await queryInterface.dropTable('Commission_Histories');
  }
};