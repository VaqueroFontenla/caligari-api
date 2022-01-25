const express = require('express');
const InnService = require('../services/inns.service');

const router = express.Router();
const service = new InnService();

router.get('/', async (req, res) => {
  try {
    const inns = await service.find();
    res.status(200).json(inns);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const inn = await service.finById(id);
    res.status(200).json(inn);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const newInn = await service.create(body);
    res.status(201).json({ message: 'Inn created', data: newInn });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const inn = await service.update(id, body);
    res.status(201).json(inn);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const inn = await service.delete(id);
    res.status(200).json(inn);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
