const express = require('express');
const router = express.Router();

const statusController = require('../controllers/status_controller');

router.get('/add_status', statusController.add_status); // add status page render
router.post('/create', statusController.create); // create status
router.get('/update_status', statusController.update_status); // update status page
router.post('/update?:id', statusController.update); //update status

module.exports = router;