const UserProjects = require("../app/auth/models/User_projects");
const sequelize = require("../config/db");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await UserProjects.bulkCreate([{ user_id: 1, project_id: 1 }]);
  },
};

down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("user_projects", null, {});
};
