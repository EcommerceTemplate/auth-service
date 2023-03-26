const jwt = require('jsonwebtoken');

require('dotenv').config();

const accessToken = (user) => {
    if (!user.email || !user.password) return null;

    const userForToken = {
        email: user.email,
        password: user.password
    };

    const token = jwt.sign(userForToken, process.env.ACCESS_SECRET, { expiresIn: '1h' });

    return token;
};

module.exports = { accessToken };
 
