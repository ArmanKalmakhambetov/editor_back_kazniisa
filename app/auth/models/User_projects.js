const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const UserEntity = require('./User');
const Project = require('./Project');

const UserProject = sequelize.define('UserProject', {
    user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    project_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    }
}, {
    tableName: 'user_projects',
    timestamps: false
});

UserProject.belongsTo(UserEntity, { foreignKey: 'user_id' });
UserProject.belongsTo(Project, { foreignKey: 'project_id' });

module.exports = UserProject;
