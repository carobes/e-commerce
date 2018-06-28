const Sequelize = require('sequelize');
const db = require('./db');

const Categoria = db.define('category', {
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

module.exports = Categoria;