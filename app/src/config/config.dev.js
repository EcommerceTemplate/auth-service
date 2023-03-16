require('dotenv').config();

const development = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGO_URL_DEV,
    //sessionSecret: process.env.SESSION_SECRET_PROD
};

module.exports = development;