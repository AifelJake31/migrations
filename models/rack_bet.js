'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'


  class Rack_Bet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rack_Bet.belongsTo(Event_Shark, {
        foreignKey: "event_shark_id",
        constraints: true,
        as: 'event_shark'
      })
      Rack_Bet.belongsTo(Rack, {
        foreignKey: "rack_id",
        constraints: true,
        as: 'rack'
      })
      Rack_Bet.belongsTo(Bettor, {
        foreignKey: "bettor_id",
        constraints: true,
        as: 'bettor'
      })
      Rack_Bet.hasOne(models.Commission_History, {
        foreignKey: "rack_bet_id",
        constraints: true
      })
    }
  }
  Rack_Bet.init({
    rack_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    event_shark_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bettor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: true,
    },
    payout_odds: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: false,
    },
    payout: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    rake: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    winner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_reward: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    raked_amount: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    date_refunded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    starting_balance: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    ending_balance: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'createdAt',
    },
    date_updated: {
      allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        field: 'updatedAt',
    },
  }, {
    sequelize,
    modelName: 'Rack_Bet',
    tableName: 'rack_bets',
  });
  
  export default Rack_Bet;