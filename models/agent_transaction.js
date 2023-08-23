'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js'
  class Agent_Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agent_Transaction.belongsTo(models.Agent, {
        foreignKey: "parent_agent_id",
        constraints: true
      })
    }
  }
  Agent_Transaction.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agent_Transaction',
  });
  export default Agent_Transaction;
