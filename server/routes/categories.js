const express = require('express');
const router = express.Router();
const models = require('../models');
const Categories = models.Categoria;


module.exports = router;


router.post('/new', function(req, res){
    Categories.findOrCreate({
        where:{categoria: req.body.categoria},
        defaults: req.body
    })
    .then((data) => res.status(201).json(data))
})

router.get('/', function (req, res) {
    Categories.findAll()
        .then(categories => res.json(categories));
});


