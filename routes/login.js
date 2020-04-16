const express = require('express');
const path = require('path');
var session = require('express-session');

const loginctrl  = require('../controler/login');

const router = express.Router();

router.get('/login1',loginctrl.getlogin);

router.get('/driverlogin',loginctrl.getdriverlogin);

router.get('/home/contact/register.html',loginctrl.getregister);

router.get('/home/login_of_drivers.html',loginctrl.getlogin_of_drivers);

router.get('/home/login.html',loginctrl.getlogin);

router.post('/home/mapsbootsrap.js',loginctrl.getmapbootsrap);

router.post('/add-user',loginctrl.addUser);

module.exports = router;