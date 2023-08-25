'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agent.hasMany(models.Bettor, {
        foreignKey: 'agent_id',
        constraints: true
      }) 
      Agent.hasMany(models.Commission_History, {
        foreignKey: 'agent_id',
        constraints: true
      })
      Agent.hasMany(models.Withdraw_History, {
        foreignKey: 'agent_id',
        constraints: true
      }) 
      Agent.belongsTo(models.Agent, {
        foreignKey: 'parent_id',
        constraints: true
      }) 
      Agent.hasMany(models.Agent_Transaction, {
        foreignKey: 'parent_agent_id',
        constraints: true
      }) 
      Agent.hasMany(models.Agent_Transaction, {
        foreignKey: 'child_agent_id',
        constraints: true
      }) 
    }
  }
  Agent.init({
    parent_id: {
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    last_login: {
      type: DataTypes.DATE
    },
    mobile_number: {
      type: DataTypes
    },
    level: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    commission: {
      type: DataTypes.DECIMAL
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
    modelName: 'Agent',
    tableName: 'Agents',
  });
  export default Agent;
