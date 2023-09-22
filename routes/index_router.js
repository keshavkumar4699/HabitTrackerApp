const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_controller');

router.get('/', indexController.home);
router.get('/week_view', indexController.week_detail);
router.get('/month_view', indexController.month_detail);

router.use('/habit', require('./habit_router.js'));
router.use('/status', require('./status_router.js'));

module.exports = router;