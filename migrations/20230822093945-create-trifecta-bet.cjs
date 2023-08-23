'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trifecta_Bet', {
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
      trifecta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Trifecta',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.SMALLINT(6)
      },
      first: {
        type: Sequelize.SMALLINT(6)
      },
      second: {
        type: Sequelize.SMALLINT(6)
      },
      third: {
        type: Sequelize.SMALLINT(6)
      },
      amount: {
        type: Sequelize.DECIMAL(9,2)
      },
      winner: {
        type: Sequelize.SMALLINT(6)
      },
      payout: {
        type: Sequelize.DECIMAL(9,2)
      },
      date_rewarded: {
        type: Sequelize.DATE
      },
      rake: {
        type: Sequelize.DECIMAL(9,2)
      },
      raked_amount: {
        type: Sequelize.DECIMAL(9,2)
      },
      starting_balance: {
        type: Sequelize.DECIMAL(9,2)
      },
      ending_balance: {
        type: Sequelize.DECIMAL(9,2)
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
    await queryInterface.dropTable('Trifecta_Bet');
  }
};
