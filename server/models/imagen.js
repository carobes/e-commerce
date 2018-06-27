'use strict';

const db = require('./db.js');
const DataTypes = db.Sequelize;

const Imagen = db.define('imagen', {

  ruta: {
    type: DataTypes.STRING,
    allowNull: false
  }

});


module.exports = Imagen;
