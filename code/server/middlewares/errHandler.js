const notFound = (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`)
    res.status(404)
    next(err)
}

const errHandler = () => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.statusCode().json({
        success: true,
        mes: err?.message
    })
}

module.exports ={
    notFound,
    errHandler
}