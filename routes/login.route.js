const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login.controller.js');

const loginController = new LoginController();

router.post('/login', loginController.login);

module.exports = router;