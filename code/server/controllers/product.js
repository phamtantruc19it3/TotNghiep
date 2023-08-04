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
    console.log(formatedQueries);

    // Filtering
    if (queries?.title) formatedQueries.title = { $regex: queries.title, $options: 'i' }
    let queryCommand = Product.find(formatedQueries);
    // sorting
    if (req.query.sort) {
        const sortBy = req.query.sort.split(',').join('')
        queryCommand = queryCommand.sort(sortBy);

    }


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


module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
}