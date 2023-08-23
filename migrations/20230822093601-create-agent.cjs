'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agent', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Agent',
          key: 'id'
        }
      },
      username: {
        type: Sequelize.STRING(180)
      },
      email: {
        type: Sequelize.STRING(180)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      last_login: {
        type: Sequelize.DATE
      },
      mobile_number: {
        type: Sequelize.STRING(180)
      },
      level: {
        type: Sequelize.SMALLINT(6),
      },
      enabled: {
        type: Sequelize.TINYINT(1),
      },
      points: {
        type: Sequelize.INTEGER
      },
      commission: {
        type: Sequelize.INTEGER(9,2)
      },
      date_created: {
        type: Sequelize.DATE,
      },
      date_updated: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Agent');
  }
};