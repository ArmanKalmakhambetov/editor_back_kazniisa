const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Role = require('./role');

const UserEntity = sequelize.define('UserEntity', {
    
    fullName: {
        type: DataTypes.STRING(255)
    },
    password: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'users_entity',
    timestamps: false
});

UserEntity.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = UserEntity;
