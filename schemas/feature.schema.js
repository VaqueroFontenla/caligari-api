const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const created_at = Joi.string();

const createFeatureSchema = Joi.object({
  name: name.required(),
  created_at,
});

const updateFeaureSchema = Joi.object({
  name: name.required(),
});

const getFeatureSchema = Joi.object({ id: id.required() });

module.exports = { createFeatureSchema, getFeatureSchema, updateFeaureSchema };
