const router = require('express').Router();
const passport = require('passport');

router.post('/login', (req,res,next) =>{
  passport.authenticate('local',
    function(err,user,info){
      if(err) return res.json(err)
      if (!user) return res.json({success: false, error: info.message})
      return res.json({success: true, user:{id: user.id}})
    })(req,res,next)
  })

router.use('/products', require('./products'));
router.use('/users', require('./users'));
router.use('/orders', require('./orders'));
router.use('/carrito', require('./cart'));

router.use(function (req, res) {
    res.status(404).end();
  });

module.exports = router;
