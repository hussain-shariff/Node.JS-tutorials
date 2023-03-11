const express = require('express')
const logger = require('../middlewares/logger')
const authorize = require('../middlewares/authorize')
const morgon = require('morgan')
const app = express()

// setup middleware
app.use([authorize, logger, morgon('tiny')])

app.get('/', (req, res)=>{
    res.send("Welcome to home page")
    console.log(req.user);
})
app.get('/about', (req, res)=>{
    res.send("This is about page")
})

app.listen(5000)