const express = require('express')
const app = express()
require('dotenv').config()

// middleware
app.use(express.json())

// routes


// start
const port = process.env.PORT || 5000
const start = () =>{
    try {
        // connectDB
        app.listen(port, ()=>{
            console.log('starting server...')
        })
    } catch (error) {
        console.log(error);
    }
}

start()