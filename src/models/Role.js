const Sequelize  = require('sequelize');
const sequelize = require('../database/db');

module.exports = sequelize.define(
    'role',
    {
        role_id: {   
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        role_name: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    }, {
        freezeTableName: true
    })
