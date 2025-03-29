import Joi from 'joi';

export const createContactSchema = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().allow(null),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('personal', 'home').required(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
});

export const patchContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional(),
  phoneNumber: Joi.string().optional(),
  email: Joi.string().email().optional(),
  isFavourite: Joi.boolean().optional(),
  contactType: Joi.string().valid('personal', 'home').optional(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
});
