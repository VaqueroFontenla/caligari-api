const express = require('express');
const FeatureService = require('../services/features.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createFeatureSchema,
  updateFeaureSchema,
  getFeatureSchema,
} = require('../schemas/feature.schema');

const router = express.Router();
const service = new FeatureService();

router.get('/', async (req, res) => {
  try {
    const features = await service.find();
    res.status(200).json(features);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.get(
  '/:id',
  validatorHandler(getFeatureSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const feature = await service.finById(id);
      res.status(200).json(feature);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createFeatureSchema, 'body'),
  async (req, res) => {
    try {
      const body = req.body;
      const newFeature = await service.create(body);
      res.status(201).json({ message: 'Feature created', data: newFeature });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
);

router.put(
  '/:id',
  validatorHandler(getFeatureSchema, 'params'),
  validatorHandler(updateFeaureSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const feature = await service.update(id, body);
      res.status(201).json(feature);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getFeatureSchema, 'params'),
  validatorHandler(updateFeaureSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const feature = await service.update(id, body);
      res.status(201).json(feature);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getFeatureSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const feature = await service.delete(id);
      res.status(200).json(feature);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
