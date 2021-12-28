const express = require('express');
const FeatureService = require('../services/features.service');

const router = express.Router();
const service = new FeatureService();

router.get('/', (req, res) => {
  const features = service.find();
  res.json(features);
});

module.exports = router;
