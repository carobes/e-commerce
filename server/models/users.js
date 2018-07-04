const Sequelize = require('sequelize');
const db = require('./db');

const Users = db.define('users', {

    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    edad: {
        type: Sequelize.INTEGER
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull:false
    }
})

module.exports = Users;