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

router.put('/', function(req, res, next) {
  Carrito.update({cantidad: req.body.cantidad}, {where: {productoId: req.body.userId, userId: req.body.productoId}})
  .then(data => res.json({updated: true}))
  .catch(next);
})

// router.put('/items/:id', (req, res, next) => { //Editá un ítem buscándolo a partir de su id
//   Item.findById(req.params.id)
//     .then(item => item.update(req.body))
//     .then(() => res.sendStatus(204))
//     .catch(next);
// });
//
// router.delete('/items/:id', (req, res, next) => { // Elimina el item buscándolo por su id.
//   Item.findById(req.params.id)
//     .then(item => item.destroy())
//     .then(() => res.sendStatus(204))
//     .catch(next);
// });
