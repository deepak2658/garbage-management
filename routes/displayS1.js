const path = require('path');

const express = require('express');
const router = express.Router();

const displayS1ctrl = require('../controler/displayS1');

router.get('/home/about',displayS1ctrl.getabout);

router.get('/home',displayS1ctrl.gethome);

router.get('/home/contact',displayS1ctrl.getcontact);

router.get('/home/login_of_drivers.html',displayS1ctrl.getlogin_of_drivers);

router.get('/home/ourwork',displayS1ctrl.getourwork);

router.get('/home/Detail',displayS1ctrl.getdetail);

router.get('/home/threetruck',displayS1ctrl.getthreetrucks);

router.get('/home/home',displayS1ctrl.redirect);

router.post('/action_page',displayS1ctrl.SubmitFeedback);

module.exports = router;