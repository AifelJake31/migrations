'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trifecta_Bets', {
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
          model: "Bettors",
          key: 'id'
        }
      },
      trifecta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Trifectas',
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
    await queryInterface.dropTable('Trifecta_Bets');
  }
};
