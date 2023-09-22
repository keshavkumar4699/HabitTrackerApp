const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_controller');

router.get('/', indexController.home);
router.get('/add_habit', indexController.addHabit);
router.get('/week_view', indexController.week_detail);
router.get('/month_view', indexController.month_detail);

module.exports = router;