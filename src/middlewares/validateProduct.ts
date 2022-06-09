import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import {
  HTTP_BAD_REEQUEST_STATUS,
  HTTP_UNPROCESSABLE_ENTITY_STATUS,
} from '../utils/status-HTTP';

const PRODUCTS = Joi.object({
  name: Joi.string().min(3).max(30).required()
    .messages({
      required: '"name" is required',
      pattern: '"name" length must be at least 3 characters long',
      string: '"name" must be a string',
    }),
  amount: Joi.string().min(3).required()
    .messages({
      required: '"amount" is required',
      pattern: '"amount" length must be at least 3 characters long',
      string: '"amount" must be a string',
    }),
});

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const { error } = PRODUCTS.validate({ name, amount });

  if (error) {
    const HTTP_STATUS = error.details[0].type === 'any.required'
      ? HTTP_BAD_REEQUEST_STATUS
      : HTTP_UNPROCESSABLE_ENTITY_STATUS;

    return res.status(HTTP_STATUS).json({ message: error.message });
  }

  next();
};

export default validateProduct;