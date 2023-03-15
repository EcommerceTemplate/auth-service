const express = require('express');
const connectDB = require('../app/src/config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});