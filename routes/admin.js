const express = require('express');
const router = express.Router();
const path = require('path');

const adminctrl = require('../controler/admin');

router.post('/admin',adminctrl.getadminpage);
router.get('/admin',adminctrl.getadminpage);

router.get('/admin/adddriver',adminctrl.getadddriver);

router.post('/done-adding',adminctrl.adddriver);

module.exports = router;