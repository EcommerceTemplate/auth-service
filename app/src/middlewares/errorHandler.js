const Boom = require('@hapi/boom');
const status = require('http-status');

const errorHandler = (err, req, res, next) => {
    if (!err.isBoom) {
        err = Boom.boomify(err, { statusCode: status.INTERNAL_SERVER_ERROR });
    }
    const { output: { statusCode, payload } } = err;
    res.status(statusCode).json(payload);
};

module.exports = errorHandler;
