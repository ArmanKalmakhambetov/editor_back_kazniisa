const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Project = require('./Project');
const Document = require('./Document');

const ProjectDocument = sequelize.define('ProjectDocument', {
    project_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    document_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    }
}, {
    tableName: 'project_documents',
    timestamps: false
});

ProjectDocument.belongsTo(Project, { foreignKey: 'project_id' });
ProjectDocument.belongsTo(Document, { foreignKey: 'document_id' });

module.exports = ProjectDocument;
