
const express = require('express');
const router = express.Router();
const listControllers = require('../controllers/listControllers');

router.get('/', listControllers.home);

module.exports = router