const express = require('express')
const { products } = require('../data')
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to home page</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((item)=>{
        const { id, name, image } = item
        return{ id, name, image }
    })
    res.send(newProducts)
})

app.listen(5000)