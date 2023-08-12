const router = require('express').Router();
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');
const ctrls = require('../controllers/blog')

router.get('/', ctrls.getBlogs);
router.post('/', [verifyAccessToken, isAdmin], ctrls.creatNewBlog);

router.get('/one/:bid', ctrls.getBlog);
router.delete('/:bid', [verifyAccessToken, isAdmin], ctrls.deleteBlog);
router.put('/likes/:bid',[verifyAccessToken], ctrls.likeBlog);
router.put('/dislike/:bid',[verifyAccessToken], ctrls.dislikeBlog);
router.put('/update/:bid', [verifyAccessToken, isAdmin], ctrls.updateBlog);





module.exports = router