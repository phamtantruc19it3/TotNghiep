const BlogCategory = require('../models/blogCategory')
const asyncHandler = require('express-async-handler')

const createCategory = asyncHandler(async (req, res) => {
    const response = await BlogCategory.create(req.body)
    return res.json({
        success: response ? true : false,
        createCategory: response ? response : " can not create new Blog -category"
    })
})

const getCategories = asyncHandler(async (req, res) => {
    const response = await BlogCategory.find().select('title _id')
    return res.json({
        success: response ? true : false,
        BlogCategory: response ? response : " can not create new Blog -category"
    })
})

const updateCategory = asyncHandler(async (req, res) => {
    const { bcid } = req.params
    const response = await BlogCategory.findByIdAndUpdate(bcid, req.body, { new: true })
    return res.json({
        success: response ? true : false,
        updateCategory: response ? response : " can not update Blog -category"
    })
})

const deleteCategory = asyncHandler(async (req, res) => {
    const { bcid } = req.params
    const response = await BlogCategory.findByIdAndDelete(bcid)
    return res.json({
        success: response ? true : false,
        deleteCategory: response ? response : " can not delete Blog -category"
    })
})

module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,

}