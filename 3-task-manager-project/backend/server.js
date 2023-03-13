const express = require('express')
const app = express()
require('./db/connect')
const tasks = require('./routes/taskRoutes')

app.use('/api/v1/tasks', tasks)


app.listen(5000)