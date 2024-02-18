
const express = require('express');
const router = express.Router();

const randomControllers = require('../controllers/randomControllers');

router.get('/', randomControllers.home);

module.exports = router