const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();

const createFeaureSchema = Joi.object({
  name: name.required(),
});

const updateFeaureSchema = Joi.object({
  name: name.required(),
});

const getFeatureSchema = Joi.object({ id: id.required() });
module.exports = { createFeaureSchema, getFeatureSchema, updateFeaureSchema };
