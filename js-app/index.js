const express = require('express');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from js-app: ' + _.capitalize('monorepo'));
});

app.listen(3000, () => console.log('Listening on port 3000'));
