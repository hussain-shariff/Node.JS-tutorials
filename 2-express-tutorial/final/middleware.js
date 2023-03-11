const express = require('express')
const app = express()

// req => middleware => res
const logger=(req, res, next)=>{
    const method = req.method
    const url = req.url
    const date = new Date().getFullYear()
    console.log(method, url, date)
    next()
}


app.get('/', logger, (req, res)=>{
    res.send("Welcome to home page")
})
app.get('/about', logger, (req, res)=>{
    res.send("This is about page")
})

app.listen(5000)