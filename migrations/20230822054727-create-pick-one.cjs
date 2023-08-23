'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pick_One', {
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
      number_of_sharks: {
        type: Sequelize.INTEGER
      },
      race_to: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.SMALLINT(6)
      },
      date_awarded: {
        type: Sequelize.DATE
      },
      pool: {
        type: Sequelize.INTEGER(15, 2)
      },
      net_pool:{
        type: Sequelize.INTEGER(15, 2)
      }, 
      rake: {
        type: Sequelize.INTEGER(15, 2)
      },
      shark_winner_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Pick_One');
  }
};