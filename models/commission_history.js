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
    },
    date_updated: {
      type: DataTypes.DATE,

    },
  }, {
    sequelize,
    modelName: 'Commission_History',
  });
  export default Commission_History;
