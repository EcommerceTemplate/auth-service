const Joi = require('joi');
const Boom = require('@hapi/boom');
const validation = (objeto, schema) => {
    const result = Joi.validate(objeto, schema);
    if (result.error) {
        throw Boom.badData(result.error.details[0].message, result.error.details);
    }
}
const middlewareSchemaValidation = (schema) => {
    return function (req, res, next) {
        try {
            validation(req.body, schema);
            next();
        } catch (error) {
            res.status(error.output.statusCode).json(error.output.payload);
        }
    };
}

module.exports = { middlewareSchemaValidation };
