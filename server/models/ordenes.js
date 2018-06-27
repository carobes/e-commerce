import Sequelize from 'sequelize';
import db from './db';


const Ordenes = db.define('ordenes', {
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,

    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    direccion: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    }


});

export default Ordenes;
