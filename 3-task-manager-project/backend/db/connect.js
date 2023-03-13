const mongoose = require('mongoose')

const connectionString = 
    "mongodb+srv://Hussain:hussain444@nodeexpressprojects.5pra6rv.mongodb.net/?retryWrites=true&w=majority"
mongoose
    .connect(connectionString)
    .then(()=>console.log('CONNECTED TO DB...'))
    .catch(err=> console.log(err))