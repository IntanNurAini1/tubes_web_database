const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');

router.get('/products', controller.getAll);
router.post('/products', controller.create);
router.put('/products/:kode', controller.update);
router.delete('/products/:kode', controller.delete);

module.exports = router;
