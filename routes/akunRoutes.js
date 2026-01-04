const express = require('express');
const router = express.Router();
const controller = require('../controller/akunController');

router.post('/', controller.create);        // REGISTER
router.post('/login', controller.login);    // LOGIN
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);

module.exports = router;
