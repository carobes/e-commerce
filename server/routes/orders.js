const express = require('express');
const router = express.Router();
const models = require('../models');
const Ordenes = models.Ordenes;
const Producto = models.Producto;
const ProductosOrden = models.ProductosOrden;
const Estado = models.Estado;
const Users = models.Users;
const Imagen = models.Imagen;

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

// esto recibo del componente carrito
// {id: 1, name: "Computador Portatil Lenovo", precio: 1000, cantidad: 1, subtotal: 1000}
// un objeto que contenga: (ejemplo)
// {"carro": {
// 		"userId": "",
// 		"email": "",
// 		"address": "",
// 		"items":[
// 			{
// 	 		"id": "1",
// 	 		"cantidad": "1",
// 	 		"subtotal": "200"
// 	 		},
// 	 		{
// 	 		"id": "3",
// 	 		"cantidad": "2",
// 	 		"subtotal": "200"
// 	 		}
// 		]
// 	}
// }
// esto es lo que voy a recibir para realizar la transaccion de generar una nueva ordenes

router.post('/', function (req, res, next) {

  const { userId, total, email, address, items } = req.body;
  let orden = {
    detalle: {
      fecha: '',
      direccion: '',
      mail: '',
      total: 0,
      productosOrdens: []
    },
      asociacion: {
        include: [ ProductosOrden ]
      },
    usuario: 0,
    estado: "Creado"
  }
  orden.detalle.fecha = new Date();
  orden.detalle.direccion = address;
  orden.detalle.mail = email;
  orden.detalle.total = total;
  // busca cada producto que existe en el carrito y traer su data
  Promise.all(items.map(item => Producto.findOne({
    where: {id: item.id},
    include: [Imagen]
  })))// recorrer con el map y armar un arreglo y pushearlo a productosOrdens
  .then(productos => {productos.map((producto, index) => {
    const obj_prod = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      cantidad: items[index].cantidad,
    }
    orden.detalle.productosOrdens.push(obj_prod);
    });
    // res.send(orden);
    return Users.findOne({where: {id: userId}})
  })
  .then(foundUser => Estado.findOne({where:{estado:orden.estado}})
  .then(foundEstado => Ordenes.create(orden.detalle, orden.asociacion)
  .then(ordenCreated => {
    ordenCreated.setUsuario(foundUser);
    ordenCreated.setStatus(foundEstado);
    res.send(ordenCreated);
  })))
  .catch(next);
})

router.get('/', function (req, res) {
    Ordenes.findAll( {include: [ProductosOrden, { model: Estado, as:'status' }, { model: Users, as:'usuario' }]})
        .then(ordenes => res.json(ordenes));
});
// router.get('/', function (req, res) {
//     Ordenes.findAll({ include: [Imagens] })
//         .then(ordenes => res.json(ordenes));
// });
