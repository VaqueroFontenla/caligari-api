const express = require('express');
const cors = require('cors');

const { logError, errorHandler } = require('./middlewares/error.handler');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Listen on', port);
});
