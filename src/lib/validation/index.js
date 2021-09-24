import Joi from "joi";

export const loginJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const createPostJoiSchema = Joi.object({});
