const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'dev';
const config = require(`../config/config.${env}.js`);
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(config.dbUri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
