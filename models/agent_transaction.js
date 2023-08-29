import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'

const AgentTransaction = sequelize.define('Agent_Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  parent_agent_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Agent',
      key: 'id',
    },
  },
  child_agent_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Agent',
      key: 'id',
    },
  },
  type: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  status: {
    type: DataTypes.SMALLINT(6),
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
  modelName: 'Agent_Transaction',
  tableName: 'agent_transactions',
  timestamps: false, 
});

module.exports = AgentTransaction;
