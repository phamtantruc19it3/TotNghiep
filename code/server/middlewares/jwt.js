const jwt = require('jsonwebtoken');

const generateAccessToken = (uid, role)=>{
    // sign có 3 đối số 
    return jwt.sign(
        {_id: uid ,role },
        process.env.JWT_SECRET,
        {expiresIn: '3d' })
}

const generateRefreshToken = (uid)=>{
    // sign có 3 đối số 
    return jwt.sign(
        {_id: uid  },
        process.env.JWT_SECRET,
        {expiresIn: '7d' })
}

module.exports ={
    generateAccessToken,
    generateRefreshToken
}


 