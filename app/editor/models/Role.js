const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const Role = sequelize.define('Role', {
    
    name: {
        type: DataTypes.STRING(45)
    }
}, {
    tableName: 'role',
    timestamps: false
});

module.exports = Role;