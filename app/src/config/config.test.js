require('dotenv').config();

const testingConfig = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGO_URI_TEST,
    //sessionSecret: process.env.SESSION_SECRET_TEST
};

module.exports = testingConfig;