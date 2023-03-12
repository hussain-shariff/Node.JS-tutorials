const express = require('express')
const app = express()
const { people } = require('../data')

app.use(express.json())

app.use(express.urlencoded({extended : false}))

app.get('/api/postman', (req, res)=>{
    res.status(200).send('Welcome to Postman!')
})

app.post('/api/postman/people', (req, res)=>{
    const { name } = req.body
    if(!name){
        res.status(404).send('Please provide name value')
    }
    else{
        res.status(200).send({success : true, data: [...people, name]})
    }
})

app.listen(5000)