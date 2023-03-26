require('dotenv').config();

const development = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGO_URI_DEV,
    //sessionSecret: process.env.SESSION_SECRET_PROD
};

module.exports = development;