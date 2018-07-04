const express = require('express');
const router = express.Router();
const models = require('../models');
const Users = models.Users;
const crypto = require('crypto');
const secret = 'Provoleta';


module.exports = router;

router.post('/new',function(req,res,next){
    const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
    req.body.password = hash
    Users.create(req.body)
    .then(data => res.status(201).json(data))
})