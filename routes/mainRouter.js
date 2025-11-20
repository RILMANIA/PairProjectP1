const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller');
const UserController = require('../controllers/userController');


// Route Home
router.get('/', Controller.home);

// Route Auth
router.get('/register', UserController.registerForm);
router.post('/register', UserController.register);
router.get('/login', UserController.loginForm);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);

// Route Services (Dipisah ke file sendiri biar rapi)
const servicesRouter = require('./serviceRouter');
router.use('/services', servicesRouter);

module.exports = router;