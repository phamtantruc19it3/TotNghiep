const router = require('express').Router();
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');
const ctrls = require('../controllers/order')



router.post('/',[verifyAccessToken],ctrls.creatOrder)
router.get('/',[verifyAccessToken],ctrls.getUserOrder)
router.get('/admin',[verifyAccessToken, isAdmin],ctrls.getOrders)


router.put('/status/:oid',[verifyAccessToken, isAdmin],ctrls.updateStatus)



module.exports = router