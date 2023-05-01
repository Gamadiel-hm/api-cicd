import { Router } from 'express';
import {
  deleteUser,
  registerUser,
  updateUser
} from '../controllers/user.controller.js';
import { userRegister } from '../validbody/user/userRegister.js';
import { validData } from '../middlewares/validData.js';

const users = Router();

users
  .get('/user/:id', registerUser)
  .post('/user', userRegister, validData, registerUser)
  .patch('/user', updateUser)
  .delete('/user', deleteUser);

export default users;
