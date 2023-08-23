'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Bettor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bettor.hasMany(models.Bettor_Cash_In, {
        foreignKey: 'bettor_id',
        constraints: true
      })
      Bettor.hasMany(models.Bettor_Cash_out, {
        foreignKey: 'bettor_id',
        constraints: true
      })
      Bettor.hasMany(models.Bettor_Wallet, {
        foreignKey: 'bettor_id',
        constraints: true
      })
    }
  }
  Bettor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bettor',
  });
  export default Bettor;
