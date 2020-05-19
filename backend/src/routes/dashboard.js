var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/comment', dashboardController.comment);
router.post('/postComment', dashboardController.validate('postComment'), dashboardController.postComment);
router.get('/getComment', dashboardController.getComment);
router.get('/getLastComment', dashboardController.getLastComment);

module.exports = router;