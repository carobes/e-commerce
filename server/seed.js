const {Producto, Imagen, Categoria} = require('./models/index')



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

  const categorias = [{
    categoria: 'Categoría 1'
  },{
    categoria: 'Categoría 2'
  },{
    categoria: 'Categoría 3'
  },{
    categoria: 'Categoría 4'
  }]

  const catprod = [{
      nombreprod: 'Producto 1',
      categorias:[{nombrecat: 'Categoría 1'},{nombrecat: 'Categoría 2'}]
  },{
    nombreprod: 'Producto 2',
    categorias:[{nombrecat: 'Categoría 2'}]
  },{
    nombreprod: 'Producto 3',
    categorias:[{nombrecat: 'Categoría 1'},{nombrecat: 'Categoría 3'}]
}]

function seed(){
    var pcat = categorias.map((categ) => Categoria.create(categ))
    var pprod = productos.map((producto) => Producto.create(producto.detalle, producto.asociacion))

    
    Promise.all([...pcat],[...pprod]).then(() => {
        catprod.map(obj => Producto.findOne({where:{nombre:obj.nombreprod}}).then(foundProd => obj.categorias.map(cat => Categoria.findOne({where:{categoria:cat.nombrecat}}).then(foundCat => foundProd.addCategory(foundCat.id)))))
    })
}

module.exports = seed;