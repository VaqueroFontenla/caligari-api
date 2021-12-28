const express = require('express');
const FeatureService = require('../services/features.service');

const router = express.Router();
const service = new FeatureService();

router.get('/', async (req, res) => {
  const features = await service.find();
  res.json(features);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const feature = await service.finById(id);
  res.json(feature);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newFeature = await service.create(body);
  res.status(201).json({ message: 'Feature created', data: newFeature });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const feature = await service.update(id, body);
  res.json(feature);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const feature = await service.delete(id);
  res.json(feature);
});

module.exports = router;
