const Sequelize = require('sequelize');
const db = require('./db');

const Categoria = sequelize.define('category', {
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
})

module.exports = Categoria;