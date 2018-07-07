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

function ahora(){
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  return (day + "/" + month + "/" + year);
}

router.get('/:id', function (req, res) {
   console.log("entro en el axios")
   Ordenes.findOne({
        where: { id: req.params.id },
        include: [ProductosOrden, { model: Estado, as:'status' }, { model: Users, as:'usuario' }]
    })
        .then(orden => {console.log("orden en el axios", orden);res.json(orden)});
});
// aqui hago la ruta POST a /api/orders para guardar una orden nueva en la tabla orders DJVR

var orden = {
  detalle: {
    fecha: '',
    direccion: '',
    mail: '',
    productosOrdens: [
        {nombre: '',
        descripcion: '',
        precio: 0,
        cantidad: 1},
        {nombre: '',
        descripcion: '',
        precio: 0,
        cantidad: 0}
    ]},
    asociacion: {
      include: [ ProductosOrden ]
    },
  usuario: '',
  estado: "Creado"
}

// esto recibo del componente carrito
// {id: 1, name: "Computador Portatil Lenovo", precio: 1000, cantidad: 1, subtotal: 1000}
// un objeto que contenga:
// carro: {
//  userId: 1,
//  total: 2000, esto ya no necesito
//  email: 'dvelez@yahoo.com',
//  address: 'Calle Manta y 3 de Mayo, Portoviejo.',
//  items:[{ id: 1, cantidad: 1, subtotal: 200 }]
// }
// esto es lo que voy a recibir para realizar la transaccion de generar una nueva ordenes

router.post('/', function (req, res, next) {
  const { userId, total, email, address, items } = req.body.carro;
  orden.detalle.fecha = ahora();
  orden.detalle.direccion = address;
  orden.detalle.mail = email;
  // debo buscar cada producto que existe en el carrito y traer su data
  Promise.all(items.map(item => Producto.findOne({
    where: {id: item.id},
    include: [Imagen]
  })))
  .then(productos => {productos.map(producto => {
    orden.detalle.productosOrdens.nombre = producto.nombre;
    orden.detalle.productosOrdens.descripcion = producto.descripcion;
    orden.detalle.productosOrdens.precio = producto.precio;
    orden.detalle.productosOrdens.cantidad = 1;
    });
    res.send(orden);
  })
  .catch(next);
})
// ordenes.map((orden) =>
//  Users.findOne({where:{nombre:orden.usuario}})
//  .then((foundUser) => Estado.findOne({where:{estado:orden.estado}})
//  .then(foundEstado => Ordenes.create(orden.detalle, orden.asociacion)
//  .then(ordenCreated => {ordenCreated.setUsuario(foundUser);
//                         ordenCreated.setStatus(foundEstado)
//                        }
//        ))))})


// router.get('/', function (req, res) {
//     Ordenes.findAll({ include: [Imagens] })
//         .then(ordenes => res.json(ordenes));
// });
// esto es lo que recibo de la promises de traer objetos
//
// [
//     {
//         "id": 1,
//         "nombre": "Producto 1",
//         "descripcion": "Soy el producto uno",
//         "precio": 20,
//         "disponibilidad": 10,
//         "createdAt": "2018-07-06T21:19:19.499Z",
//         "updatedAt": "2018-07-06T21:19:19.499Z",
//         "imagens": [
//             {
//                 "id": 2,
//                 "ruta": "/img/NIK_9984_edited_nik_800.jpg",
//                 "createdAt": "2018-07-06T21:19:19.621Z",
//                 "updatedAt": "2018-07-06T21:19:19.621Z",
//                 "productoId": 1
//             },
//             {
//                 "id": 3,
//                 "ruta": "/img/NIK_9984_edited_nik_800.jpg",
//                 "createdAt": "2018-07-06T21:19:19.621Z",
//                 "updatedAt": "2018-07-06T21:19:19.621Z",
//                 "productoId": 1
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "nombre": "Producto 3",
//         "descripcion": "Soy el producto tres",
//         "precio": 150,
//         "disponibilidad": 3,
//         "createdAt": "2018-07-06T21:19:19.501Z",
//         "updatedAt": "2018-07-06T21:19:19.501Z",
//         "imagens": [
//             {
//                 "id": 4,
//                 "ruta": "/img/NIK_9984_edited_nik_800.jpg",
//                 "createdAt": "2018-07-06T21:19:19.629Z",
//                 "updatedAt": "2018-07-06T21:19:19.629Z",
//                 "productoId": 3
//             },
//             {
//                 "id": 5,
//                 "ruta": "/img/NIK_9984_edited_nik_800.jpg",
//                 "createdAt": "2018-07-06T21:19:19.629Z",
//                 "updatedAt": "2018-07-06T21:19:19.629Z",
//                 "productoId": 3
//             },
//             {
//                 "id": 6,
//                 "ruta": "/img/NIK_9984_edited_nik_800.jpg",
//                 "createdAt": "2018-07-06T21:19:19.630Z",
//                 "updatedAt": "2018-07-06T21:19:19.630Z",
//                 "productoId": 3
//             }
//         ]
//     }
// ]
