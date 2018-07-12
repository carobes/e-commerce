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
    return Users.findOne({
      where:{id: req.params.userId},
      include: [{ model: Producto, as:'usercarrito' }]
    })
    .then(itemsCarrito => res.json(itemsCarrito.usercarrito))
    .catch(next);
})
// ruta post que inserta un productoId y un userId en la tabla carrito con la cantidad
// recibe un json de la forma { usuario: id, producto: id, cantidad: 1}
// devuelve un status 200 en exito, y un array de todos los objetos que estan en ese momento en
// el carrito
router.post('/', function(req, res, next) {
    Promise.all([
      Producto.findOne({where:{id: req.body.producto}}),
      Users.findOne({where:{id: req.body.usuario}})
    ])
    .spread((foundProduct, foundUser) => {
      return Carrito.findOrCreate({where:{cantidad: req.body.cantidad, productoId: foundProduct.id, userId: foundUser.id}})
    })
    .then((productoEnCarrito) => {
      res.json(productoEnCarrito);
    })
    .catch(next);
});

// incrementa cantidad de un item
router.put('/increment', function(req, res, next) {
  Carrito.findOne({where: {productoId: req.body.itemId, userId: req.body.userId}})
  .then(productoEnCarrito => productoEnCarrito.increment(['cantidad'], {by:1}))
  .then(() => Users.findOne({
    where:{id: req.body.userId},
    include: [{ model: Producto, as:'usercarrito' }]
  }))
  .then(itemsCarrito => res.json(itemsCarrito.usercarrito))
  .catch(next);
})

// decrementa cantidad de un item
router.put('/decrement', function(req, res, next) {
  Carrito.findOne({where: {productoId: req.body.itemId, userId: req.body.userId}})
  .then(productoEnCarrito => {
    if (productoEnCarrito.cantidad === 1) return res.json(productoEnCarrito.cantidad);
    return productoEnCarrito.decrement(['cantidad'], {by:1})
  })
  .then(() => Users.findOne({
    where:{id: req.body.userId},
    include: [{ model: Producto, as:'usercarrito' }]
  }))
  .then(itemsCarrito => res.json(itemsCarrito.usercarrito))
  .catch(next);
})
// elimina un item del carrito de un usuarioId
router.delete('/delete', function(req, res, next) {
  Carrito.findOne({where: {productoId: req.body.itemId, userId: req.body.userId}})
  .then(productoEnCarrito => productoEnCarrito.destroy())
  .then(result => res.json(result))
  .catch(next);
})
