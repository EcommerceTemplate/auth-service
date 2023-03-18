require('dotenv').config(); 

const productionConfig = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGO_URI_PROD,
    //sessionSecret: process.env.SESSION_SECRET_PROD
};

module.exports = productionConfig;