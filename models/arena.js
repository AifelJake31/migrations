'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'

  class Arena extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Arena.belongsTo(models.Event,{
        foreignKey: 'event_id',
        constraints: true
      })
    }
  }
  Arena.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
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
    }
  }, {
    sequelize,
    modelName: 'Arena',
    tableName: 'Arenas',
  });
  export default Arena;