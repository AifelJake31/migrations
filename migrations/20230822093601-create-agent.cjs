'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Agents',
          key: 'id'
        }
      },
      username: {
        type: Sequelize.STRING(180)
      },
      first_name: {
        type: Sequelize.STRING(255)
      },
      middle_name: {
        type: Sequelize.STRING(255)
      },
      last_name: {
        type: Sequelize.STRING(255)
      },
      birthdate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Agents');
  }
};