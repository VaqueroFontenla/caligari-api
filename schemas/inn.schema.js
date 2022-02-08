const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();
const city = Joi.string();
const address = Joi.string();
const description = Joi.string();
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
});

const updateInnSchema = Joi.object({
  name,
  city,
  features,
  address,
  lat,
  lon,
  description,
});

const getInnSchema = Joi.object({
  id: id.required(),
});

module.exports = { createInnSchema, updateInnSchema, getInnSchema };
