const Sequelize  = require('sequelize');
const sequelize = require('../database/db');

module.exports = sequelize.define(
    'client',
    {
        id: {   
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        role_id : {
            type: Sequelize.INTEGER,
        },
        task_id : {
            type: Sequelize.INTEGER,
        },
        password: {
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
