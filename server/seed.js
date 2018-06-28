const {Producto, Imagen} = require('./models/index')



const productos = [
    {detalle: {
    nombre: 'Producto 1',
    descripcion: 'Soy el producto uno',
    precio: 20,
    disponibilidad: 10,
    imagens: [
        {ruta: '/ruta1producto1'},
        {ruta: '/ruta2producto1'}
    ]},
    asociacion: {include: [ Imagen ]
  }},
  {detalle: {
    nombre: 'Producto 2',
    descripcion: 'Soy el producto dos',
    precio: 50,
    disponibilidad: 20,
    imagens: [
        {ruta: '/ruta1producto2'}
    ]},
    asociacion: {include: [ Imagen ]
  }},
  {detalle: {
    nombre: 'Producto 3',
    descripcion: 'Soy el producto tres',
    precio: 150,
    disponibilidad: 3,
    imagens: [
        {ruta: '/ruta1producto3'},
        {ruta: '/ruta2producto3'},
        {ruta: '/ruta3producto3'}
    ]},
    asociacion: {include: [ Imagen ]
  }}]


// function seed(){
//     Producto.create({
//         nombre: 'Producto 1',
//         descripcion: 'Soy el producto uno',
//         precio: 20,
//         disponibilidad: 10,
//         imagens: [
//             {ruta: '/ruta1producto1'},
//             {ruta: '/ruta2producto1'}
//         ]
//     },{
//         include: [ Imagen ]
//       })
// }


function seed(){
    productos.map((producto) => Producto.create(producto.detalle, producto.asociacion))
}

module.exports = seed;