'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arena_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Arena",
          key:"id"
        }
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      short_name: {
        type: Sequelize.STRING(64),
        allowNull: true
      },
      event_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      open_event_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      end_event_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      video_url: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      created_by_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      enable_trifecta: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      type: {
        type: Sequelize.SMALLINT(6),
        allowNull: false
      },
      number_of_sharks: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      max_wins: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      enable_event_booking: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      enable_quadfecta: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      enable_superfecta: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_updated: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Event');
  }
};