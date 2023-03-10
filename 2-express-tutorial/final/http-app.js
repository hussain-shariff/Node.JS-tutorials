const express = require('express')
const path = require('path')
const app = express()

// SETUP STATIC AND MIDDLEWARE
app.use(express.static('../public'))


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname ,'../NavBar/index.html'))
})

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000)