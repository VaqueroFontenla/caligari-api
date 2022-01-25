const express = require('express');
const FeatureService = require('../services/features.service');

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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await service.finById(id);
    res.status(200).json(feature);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newFeature = await service.create(body);
    res.status(201).json({ message: 'Feature created', data: newFeature });
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const feature = await service.update(id, body);
    res.status(201).json(feature);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await service.delete(id);
    res.status(200).json(feature);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
