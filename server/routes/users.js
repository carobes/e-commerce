const express = require('express');
const router = express.Router();
const models = require('../models');
const Users = models.Users;
const crypto = require('crypto');
const secret = 'Plataforma5';


module.exports = router;

router.post('/new',function(req,res,next){
    const hash = crypto.createHmac('sha256', secret)
                   .update(req.body.password)
                   .digest('hex');
    console.log(req.body.password)
    req.body.password = hash
    Users.create(req.body)
        .then(data => res.status(201).json(data))
})

router.get('/:id', function (req, res) {
    Users.findOne({
        where: { id: req.params.id }
    })
        .then(user => res.json(user));
});