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
      Bettor.hasMany(models.Rack_Bet, {
        foreignKey: "bettor_id",
        constraints: true
      })
      Bettor.hasMany(models.Bettor_Cash_In, {
        foreignKey: "bettor_id",
        constraints: true
      })
      Bettor.hasMany(models.Bettor_Cash_Out, {
        foreignKey: "bettor_id",
        constraints: true
      })
      Bettor.hasOne(models.Bettor_Wallet, {
        foreignKey: "bettor_id",
        constraints: true
      })
      Bettor.belongsTo(models.Bettor_Wallet, {
        foreignKey: "agent_id",
        constraints: true
      })
    }
  }
  Bettor.init({
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.SMALLINT(1),
      allowNull: false,
      defaultValue: 0,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_number: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    file_address: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    last_login: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    confirmation_token: {
      type: DataTypes.STRING(255),
    },
    password_requested_at: {
      type: DataTypes.DATE,
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    middle_name: {
      allowNull: true,
      type: DataTypes.STRING(255),
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    banned: {
      type: DataTypes.INTEGER,
    },
    birthdate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT('long'),
    },
    id_type: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    id_number: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    id_file_address: {
      allowNull: false,
      type: DataTypes.TEXT('long'),
    },
    source_of_income: {
      allowNull: false,
      type: DataTypes.STRING(64),
    },
    facebook_url: {
      allowNull: true,
      type: DataTypes.TEXT('long'),
    },
    security_question: {
      type: DataTypes.TEXT('long'),
    },
    security_answer: {
      type: DataTypes.TEXT('long'),
    },
    date_created: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    date_updated: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Bettor',
  });
  
  export default Bettor;