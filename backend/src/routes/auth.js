var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.getLogin);
router.get('/register', authController.getRegister);
router.get('/getLastUser', authController.getLastUser);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;