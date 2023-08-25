'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'

  class Event_Shark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event_Shark.belongsTo(models.Event, {
        foreignKey: "event_id",
        constraints: true
      })
      Event_Shark.hasMany(models.Rack_Bet, {
        foreignKey: "event_shark_id",
        constraints: true
      })
      Event_Shark.hasMany(models.Pick_One_Bet, {
        foreignKey: "event_shark_id",
        constraints: true
      })
      Event_Shark.belongsTo(models.Shark, {
        foreignKey: "shark_id",
        constraints: true
      })
    }
  }
  Event_Shark.init({
    shark_id: {
      type: DataTypes.INTEGER,
    },
    event_id: {
      type: DataTypes.INTEGER
    },
    sequence: {
      type: DataTypes.INTEGER
    },
    wins: {
      type: DataTypes.INTEGER
    },
    date_last_win: {
      type: DataTypes.DATE,
    },
    date_recent_win: {
      type: DataTypes.DATE,
    },
    handicap: {
      type: DataTypes.INTEGER
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
    modelName: 'Event_Shark',
    modelName: 'Event_Sharks',
  });
  export default Event_Shark;
