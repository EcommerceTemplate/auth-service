require('dotenv').config();

const testingConfig = {
    port: 3001,
    dbUri: process.env.MONGO_URI_TEST,
    //sessionSecret: process.env.SESSION_SECRET_TEST
};

module.exports = testingConfig;