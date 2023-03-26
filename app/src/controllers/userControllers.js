const userService = require('../services/userService');
const status = require('http-status');

const createUser = async (req, res, next) => {
    try {
        const userExistsForUsername = await userService.findUserByUsername(req.body.username);
        const userExistsForEmail = await userService.findUserByEmail(req.body.email);

        if (userExistsForUsername) {
            res.status(status.BAD_REQUEST).json({
                message: `User with username ${req.body.username} exists.`
            });
            return;
        }
        if (userExistsForEmail) {
            res.status(status.BAD_REQUEST).json({
                message: `User with email ${req.body.email} exists.`
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

const login = async (req, res, next) => {
    try {
        const user = await userService.findUserByEmail(req.body.email);
        if (!user) {
            res.status(status.BAD_REQUEST).json({
                message: `User with email ${req.body.email} no exists.`
            });
            return;
        }
        const isPasswordCorrect = await user.validatePassword(req.body.password, user.password);
        if (!isPasswordCorrect) {
            res.status(status.BAD_REQUEST).json({
                message: `Password wrong.`
            });
            return;
        }
        const token = await userService.login(req.body);
        res.status(status.OK).json({
            token
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createUser, login }