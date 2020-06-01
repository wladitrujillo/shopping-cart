'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./webhook');

router.route('/')
    .get(ctrl.get)
    .post(ctrl.post);

module.exports = router;