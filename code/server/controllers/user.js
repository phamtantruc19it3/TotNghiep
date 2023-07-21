const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res) => {
    const { email, password, firstname, lastname } = req.body
    if (!email || !password || !firstname || !lastname) {
        return res.status(400).json({
            sucess: false,
            mes: 'missing input'
        })
    }
    const user = await User.findOne({ email })
    if (user) {
        throw new Error('User da ton tai')
    }
    else {
        const newUser = await User.create(req.body)
        return res.status(200).json({
            sucess: newUser ? true : false,
            mes: newUser ? " Register da thanh cong, moi ban login" : "somthing wrong"
        })
    }
})
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            sucess: false,
            mes: 'missing input'
        })
    }

    const response = await User.findOne({ email })
    if (response && await response.isCorrectPassword(password)) {
        const { password, role, ...userData } = response.toObject()
        return res.status(200).json({
            sucess: true,
            userData
        })
    }
    else {
        throw new Error('xac thuc khong thanh cong')
    }
})

module.exports = {
    register,
    login
}

