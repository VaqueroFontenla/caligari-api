const express = require('express');
const featuresRouter = require('./features.router');
const innsRouter = require('./inns.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/features', featuresRouter);
  router.use('/inns', innsRouter);
};

module.exports = routerApi;
