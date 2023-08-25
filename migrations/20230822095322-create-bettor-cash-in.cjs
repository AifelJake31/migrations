'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bettor_Cash_Ins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bettor_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Bettors",
          key: "id"
        }
      },
      before_source: {
        type: Sequelize.DECIMAL(9, 2),
      },
      amount: {
        type: Sequelize.DECIMAL(9, 2),
      },
      after_source: {
        type: Sequelize.DECIMAL(9, 2),
      },
      remarks: {
        type: Sequelize.TEXT('long'),
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
    await queryInterface.dropTable('Bettor_Cash_Ins');
  }
};