const express = require('express')
const router = express.Router()
const { people } = require('../data')

router.get('/', (req, res)=>{
    res.status(200).json({success : true, data : people})
})

router.put('/postman/:id', (req, res)=>{
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

router.delete('/postman/:id', (req, res)=>{
    const {id} = req.params
    const person = people.find(item=> item.id === Number(id))
    if(!person){
        res.status(404).send('Person not found')
    }
    const newPeople = people.filter(item=> item.id !== Number(id))
    res.status(200).json({success : true, data: newPeople})
})

module.exports = router
