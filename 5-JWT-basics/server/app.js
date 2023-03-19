const express = require('express')
const app = express()
require('dotenv').config()


// middelwares

// routes

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