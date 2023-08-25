

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeColumn('Bettors', 'email');

    // Then, add the modified 'mobile_number' column
    await queryInterface.addColumn('Bettors', 'email', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'id_type');

    await queryInterface.addColumn('Bettors', 'id_type', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'id_number');

    await queryInterface.addColumn('Bettors', 'id_number', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'last_login');

    await queryInterface.addColumn('Bettors', 'last_login', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'source_of_income');

    await queryInterface.addColumn('Bettors', 'source_of_income', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'agent_id');

    await queryInterface.addColumn('Bettors', 'agent_id', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'email');

    await queryInterface.addColumn('Bettors', 'email', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'last_login');

    await queryInterface.addColumn('Bettors', 'last_login', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'first_name');

    await queryInterface.addColumn('Bettors', 'first_name', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'middle_name');

    await queryInterface.addColumn('Bettors', 'middle_name', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'last_name');

    await queryInterface.addColumn('Bettors', 'last_name', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'address');

    await queryInterface.addColumn('Bettors', 'address', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'file_address');

    await queryInterface.addColumn('Bettors', 'file_address', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'security_answer');

    await queryInterface.addColumn('Bettors', 'security_answer', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'security_question');

    await queryInterface.addColumn('Bettors', 'security_question', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'facebook_url');

    await queryInterface.addColumn('Bettors', 'facebook_url', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'password_requested_at');

    await queryInterface.addColumn('Bettors', 'password_requested_at', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });

    await queryInterface.removeColumn('Bettors', 'enabled');

    await queryInterface.addColumn('Bettors', 'enabled', {
      type: Sequelize.STRING(255),
      allowNull: true,
      // Other column options, if needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    // First, drop the modified 'mobile_number' column
    
  },
};
