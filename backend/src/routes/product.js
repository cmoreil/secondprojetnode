var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/product', productController.product);
router.post('/postProduct', productController.postProduct);
router.get('/getProduct', productController.getProduct);
router.get('/getLastProduct', productController.getLastProduct);

module.exports = router;