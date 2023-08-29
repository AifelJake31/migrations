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
        constraints: true,
        as: 'bettor_cash_in'
      })
      Bettor.hasMany(models.Bettor_Cash_out, {
        foreignKey: 'bettor_id',
        constraints: true,
        as: 'bettor_cash_out'
      })
      Bettor.hasMany(models.Bettor_Wallet, {
        foreignKey: 'bettor_id',
        constraints: true,
        as: 'bettor_wallet'
      })
      Bettor.hasMany(models.Rack_Bet, {
        foreignKey: 'bettor_id',
        constraints: true,
        as: 'rack_bet'
      })
    }
  }
  Bettor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Agent',
        key: 'id',
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUsernameValid(value) {
        const usernameRegex = /^[a-zA-Z0-9_]{6,20}$/;
          if (!usernameRegex.test(value)) {
            throw new Error('Invalid username format. Username should be at least 6 to 20 characters without special characters other than underscore (_)')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // enabled: {
    //   type: DataTypes.SMALLINT,
    //   allowNull: true,
    //   defaultValue: 0,
    // },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    id_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    file_address: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    confirmation_token: {
      type: DataTypes.STRING(255),
    },
    password_requested_at: {
      type: DataTypes.DATE,
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    middle_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    banned: {
      type: DataTypes.INTEGER,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    id_file_address: {
      type: DataTypes.TEXT('long'),
      allowNull: true,
    },
    source_of_income: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    facebook_url: {
      type: DataTypes.TEXT('long'),
    },
    security_question: {
      type: DataTypes.TEXT('long'),
    },
    security_answer: {
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
    mobileNumber: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true,
      isMobileNumber(value) {
        const mobileRegex = /^\+639\d{9}$/;
        if (!mobileRegex.test(value)) {
          throw new Error('Invalid Philippine mobile number format. Mobile number should start with "+639" followed by the 9-digit number.')
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Bettor',
    tableName: 'bettors',
  });
  export default Bettor;