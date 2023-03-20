const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const jobsRoute = require('./routes/jobs')
const authRoute = require('./routes/auth')
const auth = require('./middlewares/auth')
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.use('/api/v1/jobs', auth, jobsRoute)
app.use('/api/v1/auth', authRoute)

// start
const port = process.env.PORT || 5000
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log('starting server...')
        })
    } catch (error) {
        console.log(error);
    }
}

start()