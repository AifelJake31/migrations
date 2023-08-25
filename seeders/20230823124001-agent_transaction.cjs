// Use dynamic import to load the sequelize module
import('../database/index.js').then(async (sequelize) => {
  const AgentTransaction = require('../models/AgentTransaction.js');

  const seedAgentTransactions = async () => {
    try {
      // Sync the model with the database
      await sequelize.sync();

      // Create dummy data for Agent Transactions
      const dummyAgentTransactions = [
        {
          parent_agent_id: 1,
          child_agent_id: 2,
          type: 'Transfer',
          amount: 100.00,
          status: 1,
        },
        {
          parent_agent_id: 2,
          child_agent_id: 3,
          type: 'Deposit',
          amount: 50.00,
          status: 1,
        },
        // Add more dummy data as needed
      ];

      // Insert the dummy data into the Agent_Transactions table
      await AgentTransaction.bulkCreate(dummyAgentTransactions);

      console.log('Agent Transactions seeded successfully.');
    } catch (error) {
      console.error('Error seeding Agent Transactions:', error);
    } finally {
      // Close the database connection
      await sequelize.close();
    }
  };

  // Call the seeder function
  seedAgentTransactions();
}).catch((error) => {
  console.error('Error importing sequelize:', error);
});
