const path = require('path');

const express =require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const sequelize = require('./util/database');
const displayS1Data = require('./routes/displayS1');
const loginData = require('./routes/login');
const adminctrl = require('./routes/admin');
//const mongoConnect = require('./util/database').mongoConnect; 
//const products = require('./model/products');
//const authRoute = require('./routes/auth.js');

const app = express();

app.set('views engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/index',displayS1Data);

app.use(displayS1Data);
app.use(loginData);
app.use(adminctrl);

sequelize
  .sync()
  .then(result => { 
    // console.log(result);
    app.listen(3000,err=>{
        if (err) {
            console.error(err);
        }
        console.log('server started at port 3000');
    });
  })
  .catch(err => {
    console.log(err);
  });
