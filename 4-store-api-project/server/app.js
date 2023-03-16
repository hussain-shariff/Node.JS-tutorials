const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productsRoute = require('./routes/productsRoute')
require('dotenv').config()
require('express-async-errors')

// middlewares
app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send('Hello world')
})
app.use('/api/v1/products', productsRoute)

const port = process.env.PORT || 5000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log('server starting in port 5000');
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

start()