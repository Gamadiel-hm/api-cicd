import { body } from 'express-validator';

export const userRegister = [
  body('name', 'Invalid name value')
    .exists()
    .isString()
    .trim()
    .isLength({ min: 3, max: 20 }),
  body('lastName', 'Invalid last name value')
    .exists()
    .isString()
    .trim()
    .isLength({ min: 2, max: 50 }),
  body('email', 'Invalid email value')
    .exists()
    .isString()
    .trim()
    .isLength({ min: 7, max: 40 }),
  body('password', 'Invalid password value')
    .exists()
    .isString()
    .trim()
    .isLength({ min: 5, max: 30 })
];
