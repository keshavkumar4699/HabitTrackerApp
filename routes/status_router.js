const express = require('express');
const router = express.Router();

const statusController = require('../controllers/status_controller');

router.get('/add_status', statusController.add_status);
router.post('/create', statusController.create);
router.get('/update_status', statusController.update_status);
router.post('/update?:id', statusController.update);

module.exports = router;