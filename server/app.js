const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const db = require('./models/db');
const seed = require('./seed')
const {Producto, Imagen, Categoria} = require('./models/index')


const app = express();

app.use(express.static(path.resolve(`${__dirname}/../browser/public`)));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
=======
app.use('/api', routes);

>>>>>>> 07c5227a45ba9199aa6f0b4c6fae16e7d9df4589
app.use('/', function (req, res, next) {
  const indexFilePath = path.resolve(`${__dirname}/../browser/index.html`)
  res.sendfile(indexFilePath)
})

app.use((err, req, res, next) => {
  console.log('tira un puto error')
  res.status(500).send(err);
});

db.sync({ force: true })
  .then(() => app.listen(3000, () => console.log('Listening on PORT 3000')))
  .then(() => seed())