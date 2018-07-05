const Sequelize = require('sequelize');
const db = require('./db');


const Carrito = db.define('carrito', {
    cantidad: {
        type: Sequelize.INTEGER
    }

});

module.exports = Carrito;
