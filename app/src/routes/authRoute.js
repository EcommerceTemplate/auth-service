const express = require('express');
const authRoutes = express.Router();
const { login, logout } = require('../controllers/authController');
const { validationTokenMiddleware, } = require('../middlewares/validationToken');

const errorHandler = require('../middlewares/errorHandler')

authRoutes.route('/')
    .post(login);
authRoutes.route('/logout')
    .post(validationTokenMiddleware, logout);

authRoutes.use(errorHandler)

module.exports = authRoutes;
