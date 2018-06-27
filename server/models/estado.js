'use strict';

const db = require('./db.js');
const DataTypes = db.Sequelize;

const Estado = db.define('estado', {

  estado: {
    DataTypes.STRING,
    allowNull: false,
  }

});

module.exports = Estado;
