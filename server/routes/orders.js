const express = require('express');
const router = express.Router();
const models = require('../models');
const Ordenes = models.Ordenes;
const ProductosOrden = models.ProductosOrden;
const Estado = models.Estado;
const Users = models.Users;

module.exports = router;


router.get('/:id', function (req, res) {
   console.log("entro en el axios") 
   Ordenes.findOne({
        where: { id: req.params.id },
        include: [ProductosOrden, { model: Estado, as:'status' }, { model: Users, as:'usuario' }]
    })
        .then(orden => {console.log("orden en el axios", orden);res.json(orden)});
});

// router.get('/', function (req, res) {
//     Ordenes.findAll({ include: [Imagens] })
//         .then(ordenes => res.json(ordenes));
// });