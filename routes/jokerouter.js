
const express = require('express');
const router = express.Router();
const jokecontroller = require('../controllers/jokecontroller');

router.get('/:id', jokecontroller.home);

module.exports = router