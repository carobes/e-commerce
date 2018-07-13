const express = require('express');
const router = express.Router();
const models = require('../models');
const Productos = models.Producto;
const Imagen = models.Imagen
const Categoria = models.Categoria;
const Reviews = models.Reviews;

module.exports = router;

router.post('/new',function (req, res, next) {
    Productos.create(req.body, { include: [Imagen] })
        .then(producto => { req.body.categorias.map(cat => Categoria.findOne({ where: { categoria: cat } }).then(foundCat => producto.addCategory(foundCat.id))); return producto })
        .then(producto => res.status(201).json(producto))
})

router.get('/:id', function (req, res) {
    Productos.findOne({
        where: { id: req.params.id },
        include: [{ all: true }]
    })
        .then((producto) => {
            Reviews.findAll({
                where: { productoId: req.params.id },
            }).then(reviews => {
                const p = producto.toJSON();
                p.reviews = reviews;
                res.json(p);
            })
        })
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


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.json({ status: 'no está loggeado' })
    }
}

