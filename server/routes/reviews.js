const express = require('express');
const router = express.Router();
const models = require('../models');
const Reviews = models.Reviews;


module.exports = router;



router.post('/new', function (req, res, next) {
    Reviews.create({
        comentario: req.body.comentario,
        rating: 2
    })
        .then((createdReview) => createdReview.setProducto(req.body.productId))
        .then(data => res.status(201).json(data))
})
