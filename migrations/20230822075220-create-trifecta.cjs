'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trifecta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Event",
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
    await queryInterface.dropTable('Trifecta');
  }
};