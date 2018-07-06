const Sequelize = require('sequelize');
const db = require('./db');


const Ordenes = db.define('ordenes', {
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false

    },
    direccion: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
    }


});

module.exports = Ordenes;
