'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
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
          model: "Arenas",
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};