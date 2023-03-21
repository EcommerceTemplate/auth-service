const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const connectDB = require('../app/src/config/db');

const app = express();

connectDB();

dotenv.config();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
  // Check the health of your service
  // ...
  res.status(200).send('OK')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});