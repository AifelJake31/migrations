'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Pick_One extends Model {
    static associate(models) {
      Pick_One.hasMany(models.Pick_One_event, {
        foreignKey: "pick_one_id",
        constraints: true
      })
    }
  }
  Pick_One.init(
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
      number_of_sharks: {
        type: DataTypes.INTEGER,
      },
      race_to: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.SMALLINT,
      },
      date_awarded: {
        type: DataTypes.DATE,
      },
      pool: {
        type: DataTypes.DECIMAL(15, 2),
      },
      net_pool: {
        type: DataTypes.DECIMAL(15, 2),
      },
      rake: {
        type: DataTypes.DECIMAL(15, 2),
      },
      shark_winner_id: {
        type: DataTypes.INTEGER,
      },
      date_created: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      date_updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Pick_One',
      tableName: 'Pick_One',
    }
  );
  export default Pick_One;
