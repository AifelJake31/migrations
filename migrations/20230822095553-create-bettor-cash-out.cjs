'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bettor_Cash_Out', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bettor_id: {
        type: Sequelize.INTEGER,
        references:{
          model: "Bettor",
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
      },
      date_updated: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bettor_Cash_Out');
  }
};