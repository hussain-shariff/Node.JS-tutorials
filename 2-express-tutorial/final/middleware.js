const express = require('express')
const logger = require('../middlewares/logger')
const authorize = require('../middlewares/authorize')
const app = express()

// setup middleware
app.use([authorize, logger])

app.get('/', (req, res)=>{
    res.send("Welcome to home page")
})
app.get('/about', (req, res)=>{
    res.send("This is about page")
})

app.listen(5000)