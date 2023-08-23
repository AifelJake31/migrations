'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wallet.hasOne(models.Bettor, {
        foreignKey: "bettor_id",
        constraints: true
      })
    }
  }
  Wallet.init({
    bettor_id: {
      type: DataTypes.INTEGER,
    },
    points: {
      type: DataTypes.DECIMAL,
    },
    date_created: {
      type: DataTypes.DATE,
    },
    date_updated: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Bettor_Wallet',
  });
  export default Wallet;
