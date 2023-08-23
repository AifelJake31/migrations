'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Event_Shark', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shark_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "Shark",
          key: "id"
        }
      },
      event_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "Event",
          key: "id"
        }
      },
      sequence: {
        type: Sequelize.INTEGER
      },
      wins: {
        type: Sequelize.INTEGER
      },
      date_last_win: {
        type: Sequelize.DATE,
      },
      date_recent_win: {
        type: Sequelize.DATE,
      },
      handicap: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Event_Shark');
  }
};