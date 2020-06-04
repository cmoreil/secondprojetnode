var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/product', productController.product);
router.post('/postProduct', productController.postProduct);
router.get('/getProduct', productController.getProduct);
router.get('/getLastProduct', productController.getLastProduct);
router.get('/getByIdProduct/:id', productController.getByIdProduct);
router.get('/getSeminaries', productController.getSeminaries);
router.get('/getTrainings', productController.getTrainings);
router.get('/deleteProduct/:id', productController.deleteProduct);
router.get('/addToCart/:id', productController.addToCart);
router.get('/getCart', productController.getCart);
router.get('/getCheckout', productController.getCheckout);
router.post('/checkout', productController.checkout);

module.exports = router;