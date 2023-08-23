'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'


  class Pick_One_Bet extends Model {
    static associate(models) {
      
    }
  }
  Pick_One_Bet.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      bettor_id: {
        type: DataTypes.INTEGER,
       allowNull: false,
      },
      pick_one_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      event_shark_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Pick_One_Bet', 
      tableName: 'Pick_One_Bet', 
    }
  );
  export default Pick_One_Bet;