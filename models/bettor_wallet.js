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
    modelName: 'Bettor_Wallet',
    tableName: 'Bettor_Wallets',
  });
  export default Wallet;
