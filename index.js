// import cookieParser from 'cookie-parser';
import cors from 'cors';
// import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/db.js';
import router from './routes/index.js';
// import router from './routes/index.js';

// dotenv.config();
const app = express();

try {
  await sequelize.authenticate();
  console.log('Database Connected');
} catch (error) {
  console.error(error);
}

// app.use(cookieParser());
app.use(express.json());
// app.use(express.static('public'));
app.use(cors());
app.use(router);

app.listen(3000, () => console.log('server run on port 3000'));
