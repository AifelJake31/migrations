'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'

  class Commission_History extends Model {
    static associate(models) {
      Commission_History.hasOne(models.Rack_Bet, {
        foreignKey: "rack_bet_id",
        constraints: true
      })
      Commission_History.belongsTo(models.Agent, {
        foreignKey: 'agent_id',
        constraints: true
      }) 
    }
  }
  Commission_History.init({
    agent_id: {
      type: DataTypes.INTEGER,
    },
    rack_bet_id: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    gold_commission: {
      type: DataTypes.DECIMAL(9, 2),
    },
    silver_commission: {
      type: DataTypes.DECIMAL(9, 2),
    },
    master_commission: {
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
  }, {
    sequelize,
    modelName: 'Commission_History',
    modelName: 'Commission_Histories',
  });
  export default Commission_History;
