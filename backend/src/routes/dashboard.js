var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/comment', dashboardController.comment);
router.post('/postComment', dashboardController.validate('postComment'), dashboardController.postComment);
router.get('/getComment', dashboardController.getComment);
router.get('/getLastComment', dashboardController.getLastComment);
router.get('/get50LastComment', dashboardController.get50LastComment);
router.get('/getByIdComment/:id', dashboardController.getByIdComment);
router.get('/deleteComment/:id', dashboardController.deleteComment);
router.get('/getByNameComment/:username', dashboardController.getByNameComment);
router.put('/updateComment/:id', dashboardController.updateComment);


module.exports = router;