const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const db = require('./models/db');

const app = express();

app.use(express.static('/../public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.get('/', function (req, res, next) {
  const indexFilePath = path.resolve(`${__dirname}/../browser/index.html`)
  res.sendfile(indexFilePath)
})

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

db.sync()
  .then(() => app.listen(3000, () => console.log('Listening on PORT 3000')));