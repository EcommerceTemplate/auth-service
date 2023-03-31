const express = require('express');
const userRoutes = express.Router();
const { createUser } = require('../controllers/userControllers');
const userSchema = require('../validations/userValidation');
const { middlewareSchemaValidation, } = require('../middlewares/schemeValidation');
const errorHandler = require('../middlewares/errorHandler');

/**
 *@swagger
 *{
 *   "components": {
 *     "schemas": {
 *       "User": {
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
 *           "email": {
 *             "type": "String",
 *             "description": "Email of a user"
 *           },
 *          "avatar": {
 *             "type": "String",
 *             "description": "Avatar of a user",
 *              "Min": "6",
 *              "Max": "50"
 *           },
 *           "role": {
 *             "type": "String",
 *             "description": "Role of a user",
 *              "Min": "4",
 *              "Max": "5"
 *           },
 *           "isVerified": {
 *             "type": "Boolean"
 *           },
 *           "createdAt": {
 *             "type": "Date",
 *             "description": "Date creation user",
 *              "Min": "6",
 *              "Max": "10"
 *           }
 *         },
 *        "required": [ "username", "password", "email" ],
 *         "example": {
 *           "username": "Gonzalo",
 *           "password": "123456",
 *           "email": "username@email.com",       
 *         }
 *      }
 *    }
 *  }
 *}
 */

/**
 * @swagger
 *{
 *  "/api/users/": {
 *    "post": {
 *      "summary": "Create a User",
 *       "requestBody": {
 *        "required": true,
 *        "content": {
 *           "application/json": {
 *              "schema": {
 *                "type": "object",
 *                "$ref": "#/components/schemas/User"
 *                }
 *            }
 *         }
 *      },
 *      "tags": [ "User" ],
 *      "responses": {
 *        "201": { "description": "Created" },
 *        "400": { "description": "Bad Request" },
 *        "500": { "description": "Internal Server Error" }
 *      }
 *    }
 *  }
 *}
 */
userRoutes.route('/')
    .post(middlewareSchemaValidation(userSchema), createUser);

userRoutes.use(errorHandler)

module.exports = userRoutes;
