const Coupon = require('../models/coupon')
const asyncHandler = require('express-async-handler')

const createNewCoupon = asyncHandler(async (req, res) => {
    const { name, discount, expiry } = req.body;
    if (!name || !discount || !expiry) throw new Error("missing input ")
    const response = await Coupon.create({
        ...req.body,
        expiry: Date.now() + +expiry * 24 * 60 * 60 * 1000
    })
    return res.json({
        success: response ? true : false,
        createCoupon: response ? response : " can not create new Coupon "
    })
})

const getCoupons = asyncHandler(async (req, res) => {

    const response = await Coupon.find().select(' _id name discount')
    return res.json({
        success: response ? true : false,
        Coupon: response ? response : " can not get Coupon "
    })
})

const updateCoupon = asyncHandler(async (req, res) => {
    const { cid } = req.params
    if (Object.keys(req.body).length === 0) throw new Error("missing input ")
    if (req.body.expiry) req.body.expiry = Date.now() + +req.body.expiry * 24 * 60 * 60 * 1000
    const response = await Coupon.findByIdAndUpdate(cid, req.body, { new: true })
    return res.json({
        success: response ? true : false,
        updateCoupon: response ? response : " can not update Coupon "
    })
})

const deleteCoupon = asyncHandler(async (req, res) => {
    const { cid } = req.params
    const response = await Coupon.findByIdAndDelete(cid).select(' _id name discount')
    return res.json({
        success: response ? true : false,
        deleteCoupon: response ? response : " can not delete Coupon " 
    })
})


module.exports = {
    createNewCoupon,
    getCoupons,
    updateCoupon,
    deleteCoupon

}