'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Bettor_Cash_Out extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bettor_Cash_Out.belongsTo(models.Bettor, {
        foreignKey: 'bettor_id',
        constraints: true
      }) 
    }
  }
  Bettor_Cash_Out.init({
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
      type: DataTypes.DATE
    },
    date_updated: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Bettor_Cash_Out',
  });
  export default Bettor_Cash_Out;
