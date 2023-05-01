import { Router } from 'express';
import {
  deleteUser,
  registerUser,
  updateUser
} from '../controllers/user.controller.js';

const users = Router();

users
  .get('/user/:id', registerUser)
  .post('/user', registerUser)
  .patch('/user', updateUser)
  .delete('/user', deleteUser);

export default users;
