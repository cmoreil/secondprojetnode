var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/getContact', contactController.getContact);
router.post('/postContact', contactController.postContact);
router.get('/deleteContact/:id', contactController.deleteContact);

module.exports = router;