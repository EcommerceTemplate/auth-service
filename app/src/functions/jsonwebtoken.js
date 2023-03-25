const jwt = require('jsonwebtoken');

require('dotenv').config();

const accessToken = (user) => {
    if (!user.username || !user.email || !user.role) return null;

    const userForToken = {
        username: user.username,
        email: user.email,
        role: user.role
    };

    const token = jwt.sign(userForToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });

    return token;
};

module.exports = { accessToken };
 
