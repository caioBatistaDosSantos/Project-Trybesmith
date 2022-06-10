import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import {
  HTTP_BAD_REEQUEST_STATUS,
  HTTP_UNPROCESSABLE_ENTITY_STATUS,
} from '../utils/status-HTTP';

const USER = Joi.object({
  username: Joi.string().min(3).max(30).required()
    .messages({
      required: '"username" is required',
      pattern: '"username" length must be at least 3 characters long',
      string: '"username" must be a string',
    }),
  classe: Joi.string().min(3).max(30).required()
    .messages({
      required: '"classe" is required',
      pattern: '"classe" length must be at least 3 characters long',
      string: '"classe" must be a string',
    }),
  level: Joi.number().min(1).required()
    .messages({
      required: '"level" is required',
      pattern: '"level" must be greater than or equal to 1',
      number: '"level" must be a number',
    }),
  password: Joi.string().min(8).required()
    .messages({
      required: '"password" is required',
      pattern: '"password" length must be at least 8 characters long',
      string: '"password" must be a string',
    }),
});

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const { error } = USER.validate({ username, classe, level, password });

  if (error) {
    const HTTP_STATUS = error.details[0].type === 'any.required'
      ? HTTP_BAD_REEQUEST_STATUS
      : HTTP_UNPROCESSABLE_ENTITY_STATUS;

    return res.status(HTTP_STATUS).json({ message: error.message });
  }

  next();
};

export default validateProduct;