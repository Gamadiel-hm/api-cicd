import mongoose from 'mongoose';
import { envConn } from '../config/env.js';

const conect = mongoose
  .connect(envConn('DBCONNECT'))
  .then(() => console.log('Db connect'))
  .catch(error => console.log(`Error db connect ${error}`));

export default conect;
