const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habit_controller');

router.get('/add_habit', habitController.add_habit);
router.post('/create', habitController.create);
router.get('/destroy', habitController.destroy);

module.exports = router;