const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const tasks = require('./routes/taskRoutes')
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/v1/tasks', tasks)


const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, ()=>{console.log('server has been started...')})
    } catch (error) {
        console.log(error);
    }
}

start()
