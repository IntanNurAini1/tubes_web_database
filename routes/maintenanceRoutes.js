const express = require('express');
const router = express.Router();
const controller = require('../controller/maintenanceController');

router.get('/maintenance', controller.getAll);
router.post('/maintenance', controller.create);
router.put('/maintenance/:id', controller.update);
router.delete('/maintenance/:id', controller.delete);

module.exports = router;
