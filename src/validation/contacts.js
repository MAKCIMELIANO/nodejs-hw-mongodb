import Joi from 'joi';
import { isValidObjectId } from 'mongoose';

export const createContactSchema = Joi.object({
  _id: Joi.string().optional(),
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().allow(null),
  isFavourite: Joi.boolean().required(),
  contactType: Joi.string().valid('personal', 'home').required(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
  parentId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('Parent id should be a valid mongo id');
    }
    return true;
  }),
});

export const patchContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).optional(),
  phoneNumber: Joi.string().optional(),
  email: Joi.string().email().optional(),
  isFavourite: Joi.boolean().optional(),
  contactType: Joi.string().valid('personal', 'home').optional(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
  photo: Joi.string().optional(),
});
