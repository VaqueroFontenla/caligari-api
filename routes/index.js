const featuresRouter = require('./features.router');

const routerApi = (app) => {
  app.use('/features', featuresRouter);
};

module.exports = routerApi;
