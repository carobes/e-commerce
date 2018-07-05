const router = require('express').Router();

module.exports = router;



router.use('/products', require('./products'));
router.use('/carrito', require('./cart'));
