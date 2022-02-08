const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const city = Joi.string();
const address = Joi.string();
const description = Joi.string();
const created_at = Joi.date();
const lat = Joi.number().precision(4);
const lon = Joi.number().precision(4);
const features = Joi.array().items(
  Joi.object({
    id: Joi.number(),
    name: Joi.string(),
  })
);

const createInnSchema = Joi.object({
  name: name.required(),
  city: city.required(),
  features: features.required(),
  description,
  address,
  created_at,
});

const updateInnSchema = Joi.object({
  name,
  city,
  features,
  address,
  lat,
  lon,
  description,
  created_at,
});

const getInnSchema = Joi.object({
  id: id.required(),
});

module.exports = { createInnSchema, updateInnSchema, getInnSchema };
