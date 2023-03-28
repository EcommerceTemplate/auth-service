const Boom = require('@hapi/boom');

const validation = async (objeto, schema) => {
    try {
        await schema.validateAsync(objeto);
    } catch (error) {
        throw Boom.badData(error.details[0].message, error.details);
    }
};

const middlewareSchemaValidation = (schema) => {
    return async function (req, res, next) {
        try {
            await validation(req.body, schema);
            next();
        } catch (error) {
            res.status(error.output.statusCode).json(error.output.payload);
        }
    };
};

module.exports = { middlewareSchemaValidation };
