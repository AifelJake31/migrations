'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'

  class Rack extends Model {

    static associate(models) {
      Rack.belongsTo(models.Event, {
        foreignKey: 'event_id',
        constraints: true
      })
      Rack.hasMany(models.Rack_Bet, {
        foreignKey: 'rack_id',
        constraints: true,
        as: 'rack_bet'
      })
    }
  }
  Rack.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_event_shark_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    second_event_shark_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_book_start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_book_end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    first_shark_bookings: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    first_shark_payout: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    second_shark_bookings: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    second_shark_payout: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    date_reward: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    first_shark_rake: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    second_shark_rake: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    first_shark_net_bookings: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    second_shark_net_bookings: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    first_shark_odds: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: true,
    },
    second_shark_odds: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: true,
    },
    pool: {
      type: DataTypes.DECIMAL(15, 2),
    },
    net_pool: {
      type: DataTypes.DECIMAL(15, 2),
    },
    pool_rake: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: true,
    },
    redirect: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    date_refunded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    queue: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    modelName: 'Rack',
    tableName: 'racks',
  });
  
  export default Rack;
