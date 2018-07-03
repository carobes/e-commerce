var db = require('./db.js');
var Sequelize = require('sequelize');

const ProductosOrden = db.define('productosOrden', {
    nombre: {
        type: Sequelize.STRING,
        validate: {notEmpty: true}
    },
    descripcion: {
        type: Sequelize.TEXT("long"),
        allowNull: false
    },
    precio: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    cantidad: {
        type: Sequelize.INTEGER
    }
});

module.exports = ProductosOrden;