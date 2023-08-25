'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pick_One_Bets', {
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
      pick_one_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Pick_Ones",
          key: 'id'
        }
      },
      event_shark_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Event_Sharks",
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.DECIMAL(9,2)
      },
      payout: {
        type: Sequelize.DECIMAL(9,2)
      },
      payout_odds: {
        type: Sequelize.DECIMAL(9,2)
      },
      rake: {
        type: Sequelize.DECIMAL(9,2)
      },
      raked_amount: {
        type: Sequelize.DECIMAL(9,2)
      },
      winner: {
        type: Sequelize.TINYINT
      },
      date_awarded: {
        type: Sequelize.DATE
      },
      date_refunded: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Pick_One_Bets');
  }
};