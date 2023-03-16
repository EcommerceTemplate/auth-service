const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const env = process.env.NODE_ENV;

const connectDB = require('../app/src/config/db');
const configEnv = require(`./src/config/config.${env}.js`);

const app = express();
const port = configEnv.port || 3000;

connectDB();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});