const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Auth Service',
        description: 'Authentication service based on JSON Web Tokens (JWT) and CRUD operations for users',
        version: '1.0.0',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: process.env.SWAGGER_SECURITY_TYPE,
                scheme: process.env.SECURITY_SCHEMA,
                bearerFormat: process.env.BEARER_FORMAT,
            },
        },
    },
    servers: [
        {
            url: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`,
            description: 'Auth service',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['../app/src/routes/*.js'],
};

const swaggerSpect = swaggerJsdoc(options);
module.exports = swaggerSpect;