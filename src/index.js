import 'dotenv/config.js';
import { envConn } from './config/env.js';
import express from 'express';
import './db/dbconnect.js';
import users from './routes/users.js';

const app = express();

// Middlewares
app.use(express.json());

app.use('/api/v1', users);

app.listen(envConn('PORT'), () =>
  console.log(`Server listo en puerto ${envConn('PORT')}`)
);
