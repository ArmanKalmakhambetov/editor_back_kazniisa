'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('documents', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      document_name: {
        type: Sequelize.STRING(255)
      },
      document_content: {
        type: Sequelize.JSON
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('documents');
  }
};
