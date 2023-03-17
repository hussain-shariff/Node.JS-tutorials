const model = require('../models/productsSchema')

const getAllProducts = async (req, res)=>{
    const products = await model.find({})
    res.json({products, items : products.length})

}
const sortAllProducts = async (req, res)=>{
    const { sort: sortProducts } = req.query
    const products = await model.find({}).sort(sortProducts)
    res.json({products, items : products.length})
}

const getProductsByFields = async (req, res)=>{
    const { fields: productsFields } = req.query
    const fieldList = productsFields.split(',').join(' ')
    const products = await model.find({}).select(fieldList)
    res.json({products, items : products.length})    
}

const getProductByName = async (req, res)=>{
    const product = await model.find(req.query)
    res.json({product, items : product.length})
}

const limitProducts = async (req, res)=>{
    const {limit:limitNo} = req.query
    const product = await model.find({}).limit(limitNo)
    res.json({product, items : product.length})
}

const skipProducts = async (req, res)=>{
    const {skip:skipNo} = req.query
    const product = await model.find({}).skip(skipNo)
    res.json({product, items : product.length})
}

const numericFilters = async (req, res)=>{
    const {filter:filterNo} = req.query
    const product = await model.find({price:{$gt : 30}}).sort('price')
    res.json({product, items : product.length})
}

const MongoDBQueryOperator = async (req, res)=>{
    const {name : productName} = req.query
    const product = await model.find({
        name : {$regex: productName, $options: 'i'}
    })
    res.json({product, items : product.length})
}

module.exports = {
    getAllProducts,
    getProductByName,
    MongoDBQueryOperator,
    sortAllProducts,
    getProductsByFields,
    limitProducts,
    skipProducts,
    numericFilters
}