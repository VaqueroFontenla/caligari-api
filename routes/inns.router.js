const express = require('express');
const InnService = require('../services/inns.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createInnSchema,
  updateInnSchema,
  getInnSchema,
} = require('../schemas/inn.schema');

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

router.get(
  '/:id',
  validatorHandler(getInnSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inn = await service.finById(id);
      res.status(200).json(inn);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createInnSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newInn = await service.create(body);
      res.status(201).json({ message: 'Inn created', data: newInn });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(getInnSchema, 'params'),
  validatorHandler(updateInnSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const inn = await service.update(id, body);
      res.status(201).json(inn);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getInnSchema, 'params'),
  validatorHandler(updateInnSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const inn = await service.update(id, body);
      res.status(201).json(inn);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getInnSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const inn = await service.delete(id);
      res.status(200).json(inn);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
