const express = require('express')
const app = express()
const { people } = require('../data')

// static assets
app.use(express.static('../methods-public'))

// parse data
app.use(express.urlencoded({ extended : false }))

// parse json
app.use(express.json())

app.get('/api/people', (req, res)=>{
    res.status(200).json({success : true, data : people})
})
app.post('/api/people', (req, res)=>{
    const { name } = req.body
    if(!name){
        return res.status(404).json({ success : false, msg : 'please provide name value' })
    }
    res.status(200).send({ success : true, person : name})
})

app.post('/login', (req, res)=>{
    const { name } = req.body
    if(name){
        res.send(`Welcome ${ req.body.name }`)
    }
    else{
        res.status(404).send('Please provide credentials')
    }
})

app.listen(5000)