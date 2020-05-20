var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.getLogin);
router.get('/register', authController.getRegister);
router.post('/login', authController.login);
router.post('/register', authController.validate('register'), authController.register);
router.get('/getUser', authController.getUser);
router.get('/getLastUser', authController.getLastUser);

module.exports = router;