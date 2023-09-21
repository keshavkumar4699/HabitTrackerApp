const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_controller');

router.get('/', indexController.home);
router.get('/add_habit', indexController.addHabit);

module.exports = router;