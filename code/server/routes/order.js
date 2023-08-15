const router = require('express').Router();
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');
const ctrls = require('../controllers/order')



router.post('/',[verifyAccessToken, isAdmin],ctrls.creatOrder)


module.exports = router