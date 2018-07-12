'use strict';

const db = require('./db.js');
const DataTypes = db.Sequelize;

const Imagen = db.define('imagen', {

  ruta: {
    type: DataTypes.TEXT,
    allowNull: false
  }

});


module.exports = Imagen;
