const express = require('express');
const router = express.Router();
// const models = require('../models');
// const Carrito = models.Carrito;
// const Producto = models.Producto;
// const User = models.Users;
const {Producto, Users, Carrito} = require('../models/index')
var Promise = require('bluebird');

module.exports = router;
// ruta get que devuelve los productos de un userId que estan en la canasta
router.get('/:userId', function(req, res, next){
    return Carrito.findAll({
      where:{userId: req.params.userId}
    })
    .then(usuarioProductos => {
      res.send(usuarioProductos);
    })
    .catch(next);
})
// ruta post que inserta un productoId y un userId en la tabla carrito con la cantidad
// recibe un json de la forma { usuario: id, producto: id, cantidad: 1}
// devuelve un status 200 en exito, y un array de todos los objetos que estan en ese momento en
// el carrito
router.post('/', function(req, res, next){
    Promise.all([
      Producto.findOne({where:{id: req.body.producto}}),
      Users.findOne({where:{id: req.body.usuario}})
    ])
    .spread((foundProduct, foundUser) => {
      return Carrito.findOrCreate({where:{cantidad: req.body.cantidad, productoId: foundProduct.id, userId: foundUser.id}})
    })
    .then((productoEnCarrito) => {
      res.send(productoEnCarrito);
    })
    .catch(next);
});
