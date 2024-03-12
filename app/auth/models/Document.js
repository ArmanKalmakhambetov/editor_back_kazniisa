const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Document = sequelize.define('Document', {
    
    document_name: {
        type: DataTypes.STRING(255)
    },
    document_content: {
        type: DataTypes.JSON
    }
}, {
    tableName: 'documents',
    timestamps: false
});

module.exports = Document;
