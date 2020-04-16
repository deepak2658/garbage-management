const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Feedback = sequelize.define('feedback',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement: true

    },
    name : {
        type :Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    Subject : {
        
        type : Sequelize.STRING,
        allowNull : false
    },
    message : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = Feedback;