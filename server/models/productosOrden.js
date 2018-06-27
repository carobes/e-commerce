var db = require('./db.js');
var Sequelize = require('sequelize');

const ProductosOrden = db.define('productosOrden', {
    nombre: {
        type: Sequelize.STRING,
        validate: {notEmpty: true}
    },
    descripción: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
    },
    precio: {
        type: Sequelize. DOUBLE,
        allowNull: false,
    },
    cantidad: {
        type: Sequelize. NUMBER
    }
});

module.exports = ProductosOrden;