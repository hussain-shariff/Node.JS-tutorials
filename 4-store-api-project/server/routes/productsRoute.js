const express = require('express')
const router = express.Router()
const {
    getAllProducts,
    getProductByName,
    MongoDBQueryOperator,
    sortAllProducts,
    getProductsByFields,
    limitProducts,
    skipProducts,
    numericFilters
} = require('../controllers/productsController')

router.get('/', getAllProducts)
router.get('/query', getProductByName)
router.get('/mongodb', MongoDBQueryOperator)
router.get('/sort', sortAllProducts)
router.get('/fields', getProductsByFields)
router.get('/limit', limitProducts)
router.get('/skip', skipProducts)
router.get('/filter', numericFilters)

module.exports = router