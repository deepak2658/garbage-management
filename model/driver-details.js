const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const driverDetails = sequelize.define('driverDetails',{
    id : {
        type : Sequelize.INTEGER,
        allowNull :false,
        autoIncrement : true,
        primaryKey : true
    },

    driverName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phoneNumber : {
        type : Sequelize.STRING,
        allowNull : false
    },
    place:{
        type : Sequelize.STRING,
        allowNull : false
    },
    age : {
        type : Sequelize.INTEGER,
        allowNull : false
    }

});

module.exports = driverDetails;