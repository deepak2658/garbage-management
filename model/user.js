'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('Users',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    username : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type  : Sequelize.STRING,
        allowNull:false
    },
    fullname : {
        type : Sequelize.STRING,
        allowNull: false
    },
    securityQuestion : {
        type : Sequelize.STRING,
        allowNull : false
    }

});

module.exports = User;

