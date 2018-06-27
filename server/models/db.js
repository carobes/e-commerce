const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/e_commerce');

module.exports = db;
