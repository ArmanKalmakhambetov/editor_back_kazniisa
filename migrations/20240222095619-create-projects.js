'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      project_name: {
        type: Sequelize.STRING(255)
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};
