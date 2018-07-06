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
// aqui hago la ruta POST a /api/orders para guardar una orden nueva en la tabla orders DJVR

// {
//   fecha: 04/05/18,
//   direccion: 'Av. Siempreviva 1234',
//   mail: "soyelmaildelcheckout@gmail.com",
//   productosOrdens: [
//       {nombre: 'Producto 3',
//       descripcion: 'Soy el producto tres',
//       precio: 150,
//       cantidad: 1},
//       {nombre: 'Producto 2',
//       descripcion: 'Soy el producto dos',
//       precio: 50,
//       cantidad: 1}
//   ]},
//   asociacion: {include: [ ProductosOrden ]
// },
// usuario: "Alan",
// estado: "Cancelado"}
// ordenes.map((orden) => Users.findOne({where:{nombre:orden.usuario}}).then((foundUser) => Estado.findOne({where:{estado:orden.estado}}).then(foundEstado => Ordenes.create(orden.detalle, orden.asociacion).then(ordenCreated => {ordenCreated.setUsuario(foundUser);ordenCreated.setStatus(foundEstado)}))))})

router.post('/', function (req, res, next) {
  res.send(req.body.detalle);
})

// router.get('/', function (req, res) {
//     Ordenes.findAll({ include: [Imagens] })
//         .then(ordenes => res.json(ordenes));
// });
