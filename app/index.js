const express = require('express');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const userRoutes = require('./src/routes/userRoute');
const authRoutes = require('./src/routes/authRoute')

dotenv.config();

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const env = process.env.NODE_ENV || 'dev';
const swaggerSpect = require('./src/config/swagger-config');

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
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpect));


app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});