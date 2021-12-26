const express = require('express');
const features = require('../data/features.json');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(features);
});

module.exports = router;
