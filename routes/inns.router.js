const express = require('express');
const InnService = require('../services/inns.service');

const router = express.Router();
const service = new InnService();

router.get('/', async (req, res) => {
  const inns = await service.find();
  res.json(inns);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const inn = await service.finById(id);
    res.json(inn);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newInn = await service.create(body);
  res.status(201).json({ message: 'Inn created', data: newInn });
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const inn = await service.update(id, body);
  res.json(inn);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const inn = await service.delete(id);
  res.json(inn);
});

module.exports = router;
