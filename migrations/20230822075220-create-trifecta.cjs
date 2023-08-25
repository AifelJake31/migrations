'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trifectas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Events",
          key: "id"
        }
      },
      first: {
        type: Sequelize.SMALLINT(6)
      },
      second: {
        type: Sequelize.SMALLINT(6)
      },
      third: {
        type: Sequelize.SMALLINT(6)
      },
      date_awarded: {
        type: Sequelize.DATE
      },
      hit: {
        type: Sequelize.TINYINT(1)
      },
      net_pool: {
        type: Sequelize.INTEGER(10, 2)
      },
      net_pool_rambol: {
        type: Sequelize.INTEGER(10, 2)
      },
      net_pool_jackpot: {
        type: Sequelize.INTEGER(10, 2)
      },
      net_pool_super_jackpot: {
        type: Sequelize.INTEGER(10, 2)
      },
      hit_rambol: {
        type: Sequelize.TINYINT(1)
      },
      hit_jackpot: {
        type: Sequelize.TINYINT(1)
      },
      hit_super_jackpot: {
        type: Sequelize.TINYINT(1)
      },
      initial_net_pool: {
        type: Sequelize.INTEGER(10, 2)
      },
      initial_net_pool_rambol: {
        type: Sequelize.INTEGER(10, 2)
      },
      initial_net_pool_jackpot: {
        type: Sequelize.INTEGER(10, 2)
      },
      initial_net_pool_super_jackpot: {
        type: Sequelize.INTEGER(10, 2)
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
    await queryInterface.dropTable('Trifectas');
  }
};