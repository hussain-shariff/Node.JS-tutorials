const express = require('express')
const app = express()
const router = require('./routes/jwtRoutes')
require('dotenv').config()


// middelwares
app.use(express.json())

// routes
app.use('/api/v1/users', router)


// start
const port = process.env.PORT || 5000
const start = ()=>{
    try {
        app.listen(port, ()=>{
            console.log('server starting...')
        })
    } catch (error) {
        console.log(error);
    }
}

start()