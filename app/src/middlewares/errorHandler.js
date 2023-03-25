const Boom = require('@hapi/boom');
const status = require('http-status');

const errorHandler = (req, res, next) => {
    res.boom = (err) => {
        if (!err.isBoom) {
            err = Boom.boomify(err, { statusCode: status.INTERNAL_SERVER_ERROR });
        }
        const { output: { statusCode, payload } } = err;
        res.status(statusCode).json(payload);
    };
    next();
};

module.exports = errorHandler;
