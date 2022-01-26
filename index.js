const express = require('express');
const cors = require('cors');

const {
  logError,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Listen on', port);
});
