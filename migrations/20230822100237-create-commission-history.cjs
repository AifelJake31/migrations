'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Commission_History', {
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
          model: "Agent",
          key: "id"
        }
      },
      rack_bet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Rack_Bet",
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
        allowNull: false
      },
      date_updated: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Commission_History');
  }
};