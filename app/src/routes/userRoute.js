const express = require('express');
const userRoutes = express.Router();
const { createUser, login } = require('../controllers/userControllers');
const userSchema = require('../validations/userValidation');
const { middlewareSchemaValidation, } = require('../middlewares/schemeValidation');
const errorHandler = require('../middlewares/errorHandler')

userRoutes.route('/')
    .post(middlewareSchemaValidation(userSchema), createUser);
    
userRoutes.route('/login')
    .post(login);

userRoutes.use(errorHandler)

module.exports = userRoutes;
