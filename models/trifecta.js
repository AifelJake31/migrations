'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Trifecta extends Model {
    static associate(models) {
      Trifecta.hasMany(models.Trifecta_Bet, {
        foreignKey: "trifecta_id"
      })
    }
  }
  Trifecta.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      event_id: {
        type: DataTypes.INTEGER,
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
      date_awarded: {
        type: DataTypes.DATE,
      },
      hit: {
        type: DataTypes.BOOLEAN,
      },
      net_pool: {
        type: DataTypes.DECIMAL(10, 2),
      },
      net_pool_rambol: {
        type: DataTypes.DECIMAL(10, 2),
      },
      net_pool_jackpot: {
        type: DataTypes.DECIMAL(10, 2),
      },
      net_pool_super_jackpot: {
        type: DataTypes.DECIMAL(10, 2),
      },
      hit_rambol: {
        type: DataTypes.BOOLEAN,
      },
      hit_jackpot: {
        type: DataTypes.BOOLEAN,
      },
      hit_super_jackpot: {
        type: DataTypes.BOOLEAN,
      },
      initial_net_pool: {
        type: DataTypes.DECIMAL(10, 2),
      },
      initial_net_pool_rambol: {
        type: DataTypes.DECIMAL(10, 2),
      },
      initial_net_pool_jackpot: {
        type: DataTypes.DECIMAL(10, 2),
      },
      initial_net_pool_super_jackpot: {
        type: DataTypes.DECIMAL(10, 2),
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
      modelName: 'Trifecta', 
      tableName: 'trifectas', 
    }
  );
  export default Trifecta;

