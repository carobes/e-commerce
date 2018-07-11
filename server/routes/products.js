const express = require('express');
const router = express.Router();
const models = require('../models');
const Productos = models.Producto;
const Imagen = models.Imagen
const Categoria = models.Categoria;


module.exports = router;

router.get('/categories', function (req, res) {
    Categoria.findAll()
        .then(categorias => res.json(categorias));
});

router.get('/:id', function (req, res) {
    Productos.findOne({
        where: { id: req.params.id },
        include: [Imagen]
    })
        .then(producto => res.json(producto));
});


router.get('/search/:input', function (req, res) {
    Productos.findAll({
        where: {
            nombre: {
                $iLike: '%' + req.params.input + '%'
            }
        },
        include: [Imagen, { model: Categoria, as: 'Category', attributes: ['categoria'] }]
    })
        .then(producto => res.json(producto));
});

router.get('/', function (req, res) {
    Productos.findAll({ include: [Imagen, { model: Categoria, as: 'Category', attributes: ['categoria'] }] })
        .then(productos => res.json(productos));
});


