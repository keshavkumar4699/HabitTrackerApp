const express = require('express');
const router = express.Router();

const statusController = require('../controllers/status_controller');

router.get('/add_status', statusController.add_status);
router.post('/create', statusController.create);

module.exports = router;