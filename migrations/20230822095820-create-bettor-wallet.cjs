'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bettor_Wallet', {
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
      points: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false
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
    await queryInterface.dropTable('Bettor_Wallet');
  }
};