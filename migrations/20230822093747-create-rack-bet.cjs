  'use strict';

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Rack_Bets', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        rack_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Racks", 
            key: "id"
          }
        },
        event_shark_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Event_Sharks", 
            key: "id"
          }
        },
        bettor_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Bettors", 
            key: "id"
          }
        },
        amount: {
          type: Sequelize.DECIMAL(9, 2),
          allowNull: true,
        },
        payout_odds: {
          type: Sequelize.DECIMAL(8, 6),
          allowNull: false,
        },
        payout: {
          type: Sequelize.DECIMAL(9, 2),
          allowNull: false,
        },
        rake: {
          type: Sequelize.DECIMAL(9, 2),
          allowNull: false,
        },
        winner: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        date_reward: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        raked_amount: {
          type: Sequelize.DECIMAL(9, 2),
          allowNull: false,
        },
        date_refunded: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        starting_balance: {
          type: Sequelize.DECIMAL(9, 2),
          allowNull: false,
        },
        ending_balance: {
          type: Sequelize.DECIMAL(9, 2),
          allowNull: false,
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

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Rack_Bets');
    }
  };
