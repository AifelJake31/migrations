'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Trifecta_Bet extends Model {
    static associate(models) {
      // Define associations here if you have any
      // For example, if TrifectaBet belongs to Bettor and Trifecta:
      // TrifectaBet.belongsTo(models.Bettor, { foreignKey: 'bettor_id' });
      // TrifectaBet.belongsTo(models.Trifecta, { foreignKey: 'trifecta_id' });
    }
  }
  TrifectaBet.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bettor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trifecta_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.SMALLINT,
      },
      first: {
        type: DataTypes.SMALLINT,
      },
      second: {
        type: DataTypes.SMALLINT,
      },
      third: {
        type: DataTypes.SMALLINT,
      },
      amount: {
        type: DataTypes.DECIMAL(9, 2),
      },
      winner: {
        type: DataTypes.SMALLINT,
      },
      payout: {
        type: DataTypes.DECIMAL(9, 2),
      },
      date_rewarded: {
        type: DataTypes.DATE,
      },
      rake: {
        type: DataTypes.DECIMAL(9, 2),
      },
      raked_amount: {
        type: DataTypes.DECIMAL(9, 2),
      },
      starting_balance: {
        type: DataTypes.DECIMAL(9, 2),
      },
      ending_balance: {
        type: DataTypes.DECIMAL(9, 2),
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
    },
    {
      sequelize,
      modelName: 'Trifecta_Bet',
      tableName: 'Trifecta_Bets',
    }
  );
  export default Trifecta_Bet;
