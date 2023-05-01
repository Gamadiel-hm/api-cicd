import express from 'express';
import users from './routes/users.js';

const app = express();

app.use('/api/v1', users);

app.listen(3000, () => console.log('Server listo en puerto 3000'));
