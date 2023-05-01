import { validationResult } from 'express-validator';
import { invalidData } from '../response/invalid.js';

export const validData = (req, res, next) => {
  const result = validationResult(req);
  try {
    result.throw();
    next();
  } catch (error) {
    invalidData(res, error);
  }
};
