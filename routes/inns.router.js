const express = require('express');
const router = express.Router();

const inns = require('../data/inns.json');

router.get('/', (req, res) => {
  res.json(inns);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({ message: 'Inn created', data: body });
});

module.exports = router;
