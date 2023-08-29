'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Withdraw_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  } 
  Withdraw_History.init({
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
    },
    request_status: {
      type: DataTypes.INTEGER,
    },
    before_source: {
      type: DataTypes.DECIMAL(9, 2),
    },
    amount: {
      type: DataTypes.DECIMAL(9, 2),
    },
    after_source: {
      type: DataTypes.DECIMAL(9, 2),
    },
    remarks: {
      type: DataTypes.TEXT('long'),
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
    modelName: 'Withdraw_History',
    tableName: 'withdraw_histories',
  });
  export default Withdraw_History;
