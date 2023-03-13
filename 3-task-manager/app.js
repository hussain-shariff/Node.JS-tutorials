const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use('/api/v1/tasks', tasks)

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(5000)