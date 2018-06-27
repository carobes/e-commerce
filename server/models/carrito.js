const Sequelize = require('sequelize');
const db = require('./db');


const Carrito = db.define('carrito', {
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false

    }

});

module.exports = Carrito;
