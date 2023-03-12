const express = require('express')
const app = express()
const { people } = require('../data')

app.use(express.json())

app.use(express.urlencoded({extended : false}))

app.get('/api/postman', (req, res)=>{
    res.status(200).send('Welcome to Postman!')
})

app.put('/api/postman/people/:id', (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find(item=> item.id === Number(id))
    if(!person){
        res.status(404).send('Person not found')
    }

    const newPeople = people.map(item=>{
        if(item.id === Number(id)){
            item.name = name
        }
        return item
    })
    res.status(200).json({success : true, data: newPeople})
})

app.listen(5000)