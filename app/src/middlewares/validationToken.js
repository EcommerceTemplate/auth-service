const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

const validationTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return next(new Unauthorized('Missing authorization header'));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return next(new Unauthorized('Invalid token'));
    }
};

module.exports = { validationTokenMiddleware };
