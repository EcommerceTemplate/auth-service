require('dotenv').config();

const development = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGO_URL,
    //sessionSecret: process.env.SESSION_SECRET_PROD
};

module.exports = development;