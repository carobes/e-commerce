const express = require('express');
const router = express.Router();
const models = require('../models');
const Productos = models.Producto;
const Imagens = models.Imagen


module.exports = router;


router.get('/:id', function (req, res) {
    Productos.findOne({
        where: { id: req.params.id },
        include: [Imagens]
    })
        .then(producto => res.json(producto));
});

router.get('/', function (req, res) {
    Productos.findAll({ include: [Imagens] })
        .then(productos => res.json(productos));
});



