const Sequelize = require('Sequelize');

const sequelize = require('../util/database');


const Product = sequelize.define('product',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    title:{
        type : Sequelize.STRING,
        allowNull :false
    },
    price:{
        type : Sequelize.DOUBLE,
        allowNull:false
    }

});

module.exports = Product;