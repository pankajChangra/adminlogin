const Sequelize  = require('sequelize');
const sequelize = require('../database/db');

module.exports = sequelize.define(
    'task',
    {
        task_id : {   
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        tasks_name: {
            type: Sequelize.STRING
        },
        description : {
            type: Sequelize.STRING
        },
        task_status : {
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
