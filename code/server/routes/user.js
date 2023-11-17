const router = require('express').Router()
const ctrls = require('../controllers/user')
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken')

router.post('/register', ctrls.register)
router.put('/finalregister/:token', ctrls.finalRegister)

router.post('/login', ctrls.login)
router.post('/refreshtoken', ctrls.refreshAccessToken)

router.get('/current', verifyAccessToken, ctrls.getCurrent)
router.get('/', [verifyAccessToken, isAdmin], ctrls.getUsers)
router.get('/logout', ctrls.logout)
router.post('/forgotpassword', ctrls.forgotPassword)

router.delete('/', [verifyAccessToken, isAdmin], ctrls.deleteUser)

router.put('/resetpassword', ctrls.resetPassword)
router.put('/current', [verifyAccessToken], ctrls.updateUser)
router.put('/address', [verifyAccessToken], ctrls.updateAddressUser)
router.put('/cart', [verifyAccessToken], ctrls.updateCart)



router.put('/:uid', [verifyAccessToken, isAdmin], ctrls.updateUserByAdmin)


module.exports = router


// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETEeee
// CREATE (POST) + PUT - body
// GET + DELETE - query // ?fdfdsf&fdfs