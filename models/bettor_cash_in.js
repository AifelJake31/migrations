'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Bettor_Cash_In extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bettor_Cash_In.belongsTo(models.Bettor, {
        foreignKey: 'bettor_id',
        constraints: true
      }) 
    }
  }
  Bettor_Cash_In.init({
    bettor_id: {
      type: DataTypes.INTEGER,

    },
    before_source: {
      type: DataTypes.DECIMAL
    },
    amount: {
      type: DataTypes.DECIMAL
    },
    after_source: {
      type: DataTypes.DECIMAL
    },
    remarks: {
      type: DataTypes.TEXT('long')
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
    sequelize,
    modelName: 'Bettor_Cash_In',
    tableName: 'Bettor_Cash_Ins',
  });
  export default Bettor_Cash_In;
