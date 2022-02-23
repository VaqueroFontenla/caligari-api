const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const city = Joi.string();
const address = Joi.string();
const description = Joi.string();
const created_at = Joi.date();
const lat = Joi.number().precision(4);
const lon = Joi.number().precision(4);
const rating = Joi.number().integer();
const innId = Joi.number().integer();
const featureId = Joi.number().integer().min(1);

const createInnSchema = Joi.object({
  name: name.required(),
  city: city.required(),
  description,
  address,
  created_at,
  rating,
  lat,
  lon,
});

const updateInnSchema = Joi.object({
  name,
  city,
  address,
  lat,
  lon,
  description,
  created_at,
  rating,
});

const getInnSchema = Joi.object({
  id: id.required(),
});

const addFeatureSchema = Joi.object({
  innId: innId.required(),
  featureId: featureId.required(),
});
module.exports = {
  createInnSchema,
  updateInnSchema,
  getInnSchema,
  addFeatureSchema,
};
