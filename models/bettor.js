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
      Bettor.hasMany(models.Pick_One_Bet, { 
        foreignKey: 'bettor_id', 
        as: 'pickOneBets' 
      });
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
      allowNull: false,
      references: {
        model: 'Agent',
        key: 'id',
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.SMALLINT,
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    confirmation_token: {
      type: DataTypes.STRING(255),
    },
    password_requested_at: {
      type: DataTypes.DATE,
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING(255),
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    id_file_address: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    source_of_income: {
      type: DataTypes.STRING(64),
      allowNull: false,
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
    mobile_number: {
      allowNull: false,
      type: DataTypes.STRING(255),
    }
  }, {
    sequelize,
    modelName: 'Bettor',
    tableName: 'Bettors',
  });
  export default Bettor;
