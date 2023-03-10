const express = require('express')
const { products, people } = require('../data')
const app = express()

app.get('/', (req, res)=>{
    res.json(products)
})

app.listen(5000)