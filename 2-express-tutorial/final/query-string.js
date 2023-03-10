const express = require('express')
const { products } = require('../data')
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to home page</h1>')
})

app.get('/api/v1/query', (req, res)=>{
    const { search, limit } = req.query
    console.log(search);
    let sortedData =  [...products ]
    if(search){
        sortedData = sortedData.filter(item=>{
            return item.name.startsWith(search)})
    }
    if(limit){
        sortedData = sortedData.slice(0, Number(limit))
    }
    if(sortedData.length < 1){
        res.status(200).send('<h1>Product not found</h1>')
    }
    res.status(200).json(sortedData)
})


app.listen(5000)