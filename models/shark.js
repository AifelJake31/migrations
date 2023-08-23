'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Shark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shark.hasMany(models.Event_Shark, {
        foreignKey: "shark_id",
        constraints: true
      })
    }
  }
  Shark.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    short_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE
    },
    date_updated: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Shark',
  });
  export default Shark;
