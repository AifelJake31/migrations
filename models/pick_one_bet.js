'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
class Pick_One_Bet extends Model {
  static associate(models) {
    Pick_One_Bet.belongsTo(models.Bettors,
      {
        foreignKey: 'bettorId',
        as: 'bettor'
      });
    Pick_One_Bet.belongsTo(models.Pick_One,
      {
        foreignKey: 'pick_one_id',
        as: 'bettor'
      });
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
    modelName: 'Pick_One_Bet',
    tableName: 'pick_one_bets',
  }
);
export default Pick_One_Bet;
