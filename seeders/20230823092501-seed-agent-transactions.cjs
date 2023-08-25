const seedAgentTransactions = async () => {
  try {

    const dummyTransactions = [
      {
        parent_agent_id: 1,
        child_agent_id: 2,
        type: 'TransactionType1',
        amount: 100.00,
        status: 1,
      },
      {
        parent_agent_id: 2,
        child_agent_id: 3,
        type: 'TransactionType2',
        amount: 150.50,
        status: 2,
      },

    ];

    // Use bulkCreate to insert the data into the table
    await seedAgentTransactions.bulkCreate(dummyTransactions);

    console.log('Agent transactions seeded successfully.');
  } catch (error) {
    console.error('Error seeding agent transactions:', error);
  }
};

// Call the seeder function to insert the data
seedAgentTransactions();
