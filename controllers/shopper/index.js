'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('./shopper.ctrl');

router.route('/info')
    .get(ctrl.getInfo);

router.route('/sendEmail')
    .put(ctrl.sendEmail);


module.exports = router;