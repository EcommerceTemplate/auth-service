const express = require('express');
const authRoutes = express.Router();
const { login, logout } = require('../controllers/authController');
const { validationTokenMiddleware, } = require('../middlewares/validationToken');

const errorHandler = require('../middlewares/errorHandler');

/**
 *@swagger
 *{
 *   "components": {
 *     "schemas": {
 *       "UserLoginRequest": {
 *         "type": "object",
 *         "properties": {
 *           "username": {
 *             "type": "String",
 *             "description": "Username of a user",
 *              "Min": "7",
 *              "Max": "25"
 * 
 *           },
 *           "password": {
 *             "type": "String",
 *             "description": "Password of a user",
 *              "Min": "6",
 *              "Max": "8"
 *           },
 *         },
 *        "required": [ "username", "password"],
 *         "example": {
 *           "username": "Gonzalo",
 *           "password": "123456",      
 *         }
 *      }
 *    }
 *  }
 *}
 */


/**
 * @swagger
 *{
 *  "/api/auth": {
 *    "post": {
 *      "summary": "Login",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/UserLoginRequest"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "User" ],
 *      "security":[bearerAuth: []],
 *      "responses": {
 *        "200": { "description": "OK" },
 *        "401": { "description": "Unauthorized" },
 *        "422": { "description": "Unprocessable Entity" }
 *      }
 *    }
 *  }
 *}
 */
authRoutes.route('/')
    .post(login);

/**
 * @swagger
 *{
 *  "/api/logout": {
 *    "post": {
 *      "summary": "Logout",
 *      "tags": [ "User" ],
 *      "security":[bearerAuth: [token]],
 *      "responses": {
 *        "200": { "description": "OK" },
 *      }
 *    }
 *  }
 *}
 */

authRoutes.route('/logout')
    .post(validationTokenMiddleware, logout);

authRoutes.use(errorHandler)

module.exports = authRoutes;
