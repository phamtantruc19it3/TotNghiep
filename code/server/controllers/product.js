const Product = require('../models/product')
const asyncHandler = require('express-async-handler');
const slugify = require('slugify')

const createProduct = asyncHandler(async (req, res) => {
    if (Object.keys(req.body).length === 0) throw new Error('Missing inputs')
    if (req.body && req.body.title) {
        req.body.slug = slugify(req.body.title);
        const newProduct = await Product.create(req.body)
        return res.status(200).json({
            success: newProduct ? true : false,
            createProduct: newProduct ? newProduct : ' cannot creat a new product'
        })
    }
})

const getProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const product = await Product.findById(pid)
    return res.status(200).json({
        success: product ? true : false,
        productData: product ? product : ' cannot get a product'
    })
})
// filtering ...sorting & phan Trang 
const getProducts = asyncHandler(async (req, res) => {
    const queries = { ...req.query };

    // Tách các trường đặc biệt ra khỏi query
    const excludeFields = ['limit', 'sort', 'page', 'fields'];
    excludeFields.forEach(el => delete queries[el]);

    // Format lại đúng cú pháp của mongoose
    let queryString = JSON.stringify(queries);
    queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g, matchedEl => `$${matchedEl}`);
    const formatedQueries = JSON.parse(queryString);
    

    // Filtering
    if (queries?.title) formatedQueries.title = { $regex: queries.title, $options: 'i' }
    let queryCommand = Product.find(formatedQueries);
    // sorting
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join('')
        queryCommand = queryCommand.sort(sortBy);
    }
    //fields limiting 
    if (req.query.fields) {
        const fields = req.query.fields.split(',').join('')
        queryCommand = queryCommand.select(fields);
    }
    // pagination 
    const page = +req.query.page || 1;
    const limit = +req.query.limit || process.env.LIMIT_PRODUCTS
    const skip = (page - 1) * limit
    queryCommand.skip(skip).limit(limit)



    try {
        const response = await queryCommand.exec();
        const counts = await Product.find(formatedQueries).countDocuments();

        return res.status(200).json({
            success: response ? true : false,
            products: response ? response : 'Cannot get a product',
            counts
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const updatedProduct = await Product.findByIdAndUpdate(pid, req.body, { new: true })
    return res.status(200).json({
        success: updatedProduct ? true : false,
        updatedProduct: updatedProduct ? updatedProduct : ' cannot update products'
    })
})

const deleteProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const deleteProduct = await Product.findByIdAndDelete(pid)
    return res.status(200).json({
        success: deleteProduct ? true : false,
        deleteProduct: deleteProduct ? `delete product  is done` : ' cannot delete products'
    })
})

const ratings = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { star, comment, pid } = req.body
    if (!star || !pid) throw new Error(' missing input ')
    const ratingProduct = await Product.findById(pid)
    const alreadyRating = ratingProduct?.ratings?.find(el => el.postedBy.toString() === _id)
    // console.log({ alreadyRating })
    if (alreadyRating) {
        //update starr and comments
        await Product.updateOne({
            ratings: { $elemMatch: alreadyRating },
        }, {
            $set: {
                "ratings.$.star": star,
                "ratings.$.comment": comment,
            }
        }, { new: true })

    } else {
        // them comment vs start
        const response = await Product.findByIdAndUpdate(pid, {
            $push: { ratings: { star, comment, postedBy: _id } }
        }, { new: true })
        // console.log(response)
    }
    // sum ratings
    const updateProduct = await Product.findById(pid)
    const ratingCount = updateProduct.ratings.length
    const sumRatings = updateProduct.ratings.reduce((sum, el) => sum + +el.star, 0)
    updateProduct.totalRatings = Math.round(sumRatings * 10 / ratingCount) / 10

    await updateProduct.save()

    return res.status(200).json({
        stars: true,
        updateProduct
    })
})

const uploadImagesProduct = asyncHandler(async (req, res) => {
    const { pid } = req.params
    if (!req.files) throw new Error(' missing input')
    const response = await Product.findByIdAndUpdate(pid, { $push: { images:{ $each: req.files.map(el => el.path)} } },{new: true})
// console.log(first)
    return res.status(200).json({
        status:response ? true : false,
        updateProduct : response ? response : ' can not update images product '
    })
})


module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    ratings,
    uploadImagesProduct,

}