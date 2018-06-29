var db = require('./db.js');
var Sequelize = require('sequelize');

const Reviews = db.define('reviews', {    
    comentario: {
        type: Sequelize.TEXT("long"),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Reviews;