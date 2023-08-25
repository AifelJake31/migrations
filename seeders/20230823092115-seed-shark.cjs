const { bulkInsert, bulkDelete } = require('../database/index.js');

exports.up = async (queryInterface, Sequelize) => {
  return bulkInsert('Sharks', [
    {
      name: 'Dennis Orcollo',
      short_name: 'DO',
      location: 'Location1',
      date_created: new Date(),
      date_updated: new Date(),
    },
    {
      name: 'Shane Boieng',
      short_name: 'SB',
      location: 'Location2',
      date_created: new Date(),
      date_updated: new Date(),
    },
  ]);
};

exports.down = async (queryInterface, Sequelize) => {
  await bulkDelete('Sharks', null, {});
};
