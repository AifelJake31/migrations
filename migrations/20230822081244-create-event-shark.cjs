'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Event_Sharks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shark_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "Sharks",
          key: "id"
        }
      },
      event_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "Events",
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
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'createdAt',
      },
      date_updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        field: 'updatedAt',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Event_Sharks');
  }
};