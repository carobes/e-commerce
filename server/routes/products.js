const express = require('express');
const router = express.Router();
const models = require('../models');
const Productos = models.Producto;
const Imagen = models.Imagen
const Categoria = models.Categoria


module.exports = router;

router.post('/new',function(req,res,next){
    Productos.create(req.body, {include: [Imagen]})
        .then(producto => {req.body.categorias.map(cat => Categoria.findOne({where:{categoria: cat}}).then(foundCat => producto.addCategory(foundCat.id))); return producto})
        .then(producto => res.status(201).json(producto))
})

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
        include: [Imagen]
    })
        .then(producto => res.json(producto));
});

router.get('/', function (req, res) {
    Productos.findAll({ include: [Imagen] })
        .then(productos => res.json(productos));
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
      return next()
    }else{
      res.json({status: 'no está loggeado'})
    }
  }

