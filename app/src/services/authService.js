const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validatePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
const generateToken = async (username) => {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = { validatePassword, generateToken };
