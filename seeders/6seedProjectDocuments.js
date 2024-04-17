const ProjectDocum = require("../app/auth/models/Project_documents");
const sequelize = require("../config/db");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await ProjectDocum.bulkCreate([
      { project_id: 1, document_id: 1 },
      { project_id: 1, document_id: 2 },
    ]);
  },
};

down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("project_documents", null, {});
};
