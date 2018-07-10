const express = require('express');
const router = express.Router();
const models = require('../models');
const Users = models.Users;


module.exports = router;

router.post('/new',function(req,res,next){
    Users.findOrCreate({
        where:{mail:req.body.mail},
        defaults:req.body
    })
        .then(data => res.status(201).json(data))
})

router.get('/:id', function (req, res) {
    Users.findOne({
        where: { id: req.params.id }
    })
        .then(user => res.json({
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            mail: user.mail,
            edad: user.edad,
            admin: user.admin
        }));
});