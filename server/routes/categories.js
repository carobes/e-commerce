const express = require('express');
const router = express.Router();
const models = require('../models');
const Categories = models.Categoria;


module.exports = router;



router.get('/', function (req, res) {
    Categories.findAll()
        .then(categories => res.json(categories));
});


