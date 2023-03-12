const express = require('express')
const app = express()
const { people } = require('../data')

app.use(express.json())

app.use(express.urlencoded({extended : false}))

app.get('/api/postman', (req, res)=>{
    res.status(200).send('Welcome to Postman!')
})

app.delete('/api/postman/people/:id', (req, res)=>{
    const {id} = req.params
    const person = people.find(item=> item.id === Number(id))
    if(!person){
        res.status(404).send('Person not found')
    }
    const newPeople = people.filter(item=> item.id !== Number(id))
    res.status(200).json({success : true, data: newPeople})
})

app.listen(5000)