const express = require('express')
const app = express()
const router = require('./routes/jwtRoutes')
const connectDB = require('./db/connect')
require('dotenv').config()


// middelwares
app.use(express.json())

// routes
app.use('/api/v1', router)


// start
const port = process.env.PORT || 5000
const start = ()=>{
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log('server starting...')
        })
    } catch (error) {
        console.log(error)
    }
}

start()