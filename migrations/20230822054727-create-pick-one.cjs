'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pick_Ones', {
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

    await queryInterface.addConstraint('Pick_Ones', {
      type: 'foreign key',
      name: 'FK_Pick_Ones_Events',
      fields: ['event_id'],
      references: {
        table: 'Events',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pick_Ones');
  }
};