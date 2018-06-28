const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/e_commerce',{logging:false});

module.exports = db;
