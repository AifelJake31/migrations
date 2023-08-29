'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'

  class Event extends Model {

    static associate(models) {
      Event.hasMany(models.Pick_One, {
        foreignKey: 'event_id',
        constraints: true
      });
      Event.belongsTo(models.Arena, {
        foreignKey: 'arena_id',
        constraints: true
      });
      Event.hasMany(models.Event_Shark, {
        foreignKey: 'event_id',
        constraints: true
      });
      Event.hasMany(models.Rack, {
        foreignKey: 'event_id',
        constraints: true
      });
      Event.hasMany(models.Trifecta, {
        foreignKey: 'event_id',
        constraints: true
      });
    }
  }
  Event.init({
    arena_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    short_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    event_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    open_event_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_event_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    video_url: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    enable_trifecta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    type: {
      type: DataTypes.SMALLINT(6),
      allowNull: false,
    },
    number_of_sharks: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    max_wins: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    enable_event_booking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    enable_quadfecta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    enable_superfecta: {
      type: DataTypes.BOOLEAN,
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
    modelName: 'Event',
    tableName: 'events',
  });
  
  export default Event;
