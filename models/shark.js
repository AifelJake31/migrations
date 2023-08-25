'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js';

class Shark extends Model {
  static associate(models) {
    Shark.hasMany(models.Event_Shark, {
      foreignKey: 'shark_id',
      constraints: true,
    });
  }
}

Shark.init(
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    short_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
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
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt',
      onUpdate: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelize,
    modelName: 'Shark',
    tableName: 'Sharks',
    timestamps: false,
  }
);

export default Shark;
