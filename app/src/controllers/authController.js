const userService = require('../services/userService');
const authService = require('../services/authService')
const status = require('http-status');

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await userService.findUserByUsername(username);
        if (!user) {
            res.status(status.UNAUTHORIZED).json({ message: 'Invalid username or password' });
            return;
        }
        const passwordIsValid = await authService.validatePassword(password, user.password);
        if (!passwordIsValid) {
            res.status(status.UNAUTHORIZED).json({ message: 'Invalid username or password' });
            return;
        }
        const token = await authService.generateToken(username);
        res.status(status.OK).json({ token });
    } catch (error) {
        next(error);
    }
};
const blacklistedTokens = new Set();
const logout = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        blacklistedTokens.add(token);
        res.status(status.OK).json({ message: 'Logged out successfully' });
    } catch (error) {
        next(error);
    }
};
module.exports = { login, logout };
