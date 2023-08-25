module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Racks', 'winner_shark_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Racks', 'winner_shark_id');
  },
};

