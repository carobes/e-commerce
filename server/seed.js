const Producto = require('./models/producto')


const productos = [{
    nombre: 'Producto 1',
    descripcion: 'Soy el producto uno',
    precio: 20,
    disponibilidad: 10,
    imagens: [
        {ruta: '/ruta1producto1'},
        {ruta: '/ruta2producto1'}
    ]
},{
    nombre: 'Producto 2',
    descripcion: 'Soy el producto dos',
    precio: 50,
    disponibilidad: 20,
    imagens: [
        {ruta: '/ruta1producto2'}
    ]
},{
    nombre: 'Producto 3',
    descripcion: 'Soy el producto tres',
    precio: 150,
    disponibilidad: 3,
    imagens: [
        {ruta: '/ruta1producto3'},
        {ruta: '/ruta2producto3'},
        {ruta: '/ruta3producto3'}
    ]
}]

function seed(){
    productos.map((producto) => Producto.create(producto))
}

module.exports = seed;