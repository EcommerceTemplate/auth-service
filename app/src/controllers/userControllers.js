const userService = require('../services/userService');
const status = require('http-status');

const createUser = async (req, res, next) => {
    try {
        const userExistsForUsername = await userService.findUserByUsername(req.body.username);
        const userExistsForEmail = await userService.findUserByEmail(req.body.email);
        if (userExistsForUsername || userExistsForEmail) {
            res.status(status.BAD_REQUEST).json({
                message: `the user already exists.`
            });
            return;
        }
        const user = await userService.createUser(req.body);
        const { username, email } = user;
        res.status(status.CREATED).json({
            username, email
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { createUser }