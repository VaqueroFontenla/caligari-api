const express = require('express');
const InnService = require('../services/inns.service');

const router = express.Router();
const service = new InnService();

router.get('/', (req, res) => {
  const inns = service.find();
  res.json(inns);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const inn = service.finById(id);
  res.json(inn);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newInn = service.create(body);
  res.status(201).json({ message: 'Inn created', data: newInn });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const inn = service.update(id, body);
  res.json(inn);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const inn = service.delete(id);
  res.json(inn);
});

module.exports = router;
