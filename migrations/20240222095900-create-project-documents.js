'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_documents', {
      project_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      document_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'documents',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_documents');
  }
};
