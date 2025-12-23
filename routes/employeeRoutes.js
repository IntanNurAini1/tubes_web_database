const express = require('express');
const router = express.Router();
const controller = require('../controller/employeeController');

router.get('/employees', controller.getAll);
router.get('/employees/:nip', controller.getByNip);
router.post('/employees', controller.create);
router.put('/employees/:nip', controller.update);
router.delete('/employees/:nip', controller.delete);

module.exports = router;