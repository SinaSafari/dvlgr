import Joi from "joi";

export const loginJoiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const createPostJoiSchema = Joi.object({
  title: Joi.string().required().min(3).max(64),
  content: Joi.string(),
  // TODO: complete these
});
