const express = require('express');
const userRoutes = express.Router();
const { createUser } = require('../controllers/userControllers');
const userSchema = require('../validations/userValidation');
const { middlewareSchemaValidation } = require('./middlewares');
const { errorHandler } = require('./middlewares')

userRoutes.route('/users')
    .post(middlewareSchemaValidation(userSchema), createUser);

userRoutes.use(errorHandler)

module.exports = userRoutes;
