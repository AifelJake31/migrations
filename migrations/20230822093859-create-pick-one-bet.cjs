'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pick_One_Bet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bettor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bettor",
          key: 'id'
        }
      },
      pick_one_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pick_One",
          key: 'id'
        }
      },
      event_shark_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Event_Shark",
          key: 'id'
        }
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pick_One_Bet');
  }
};