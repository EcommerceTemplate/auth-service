const userService = require('../services/userService');
const status = require('http-status');

const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(status.CREATED).json(user);
    } catch (error) {
        next(error);
    }
};
module.exports = { createUser }