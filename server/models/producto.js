'use strict';

const db = require('./db.js');
const DataTypes = db.Sequelize;

const Producto = db.define('producto', {

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.FLOAT,
  },
  disponibilidad: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }

});


module.exports = Producto;
