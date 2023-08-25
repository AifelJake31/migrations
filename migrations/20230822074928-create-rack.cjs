'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Racks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events",
          key: "id"
        }
      },
      first_event_shark_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      second_event_shark_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sequence: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      date_start: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      date_end: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      date_book_start: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      date_book_end: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      first_shark_bookings: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      first_shark_payout: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      second_shark_bookings: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      second_shark_payout: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      date_reward: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      first_shark_rake: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      second_shark_rake: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      first_shark_net_bookings: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      second_shark_net_bookings: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      first_shark_odds: {
        type: Sequelize.DECIMAL(8, 6),
        allowNull: true,
      },
      second_shark_odds: {
        type: Sequelize.DECIMAL(8, 6),
        allowNull: true,
      },
      pool: {
        type: Sequelize.DECIMAL(15, 2),
      },
      net_pool: {
        type: Sequelize.DECIMAL(15, 2),
      },
      pool_rake: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: true,
      },
      redirect: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      date_refunded: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      queue: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
    await queryInterface.dropTable('Racks');
  }
};