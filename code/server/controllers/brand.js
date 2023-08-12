const Brand = require('../models/brand')
const asyncHandler = require('express-async-handler')

const createNewBrand = asyncHandler(async (req, res) => {
    const response = await Brand.create(req.body)
    return res.json({
        success: response ? true : false,
        createBrand: response ? response : " can not create new Brand"
    })
})

const getBrands = asyncHandler(async (req, res) => {
    const response = await Brand.find()
    return res.json({
        success: response ? true : false,
        Brands: response ? response : " can not create new Brand"
    })
})

const updateBrand = asyncHandler(async (req, res) => {
    const { bid } = req.params
    const response = await Brand.findByIdAndUpdate(bid, req.body, { new: true })
    return res.json({
        success: response ? true : false,
        updateBrand: response ? response : " can not update Brand"
    })
})

const deleteBrand = asyncHandler(async (req, res) => {
    const { bid } = req.params
    const response = await Brand.findByIdAndDelete(bid)
    return res.json({
        success: response ? true : false,
        deleteBrand: response ? response : " can not delete Brand"
    })
})

module.exports = {
    createNewBrand,
    getBrands,
    updateBrand,
    deleteBrand,

}