var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.getLogin);
router.get('/register', authController.getRegister);
router.post('/login', authController.login);
router.post('/register', authController.validate('register'), authController.register);
router.get('/getUser', authController.getUser);
router.get('/getLastUser', authController.getLastUser);
router.get('/getByIdUser/:id', authController.getByIdUser);
router.get('/deleteUser/:id', authController.deleteUser);
router.put('/updateUser/:id', authController.updateUser);


module.exports = router;