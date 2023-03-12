const { people } = require('../data')

const getPeople = (req, res)=>{
    res.status(200).json({success : true, data : people})
}

const putPeople = (req, res)=>{
    const { name } = req.body
    if(!name){
        return res.status(404).json({ success : false, msg : 'please provide name value' })
    }
    res.status(200).send({ success : true, person : name})
}

const updatePeople = (req, res)=>{
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
}

const deletePeople = (req, res)=>{
    const {id} = req.params
    const person = people.find(item=> item.id === Number(id))
    if(!person){
        res.status(404).send('Person not found')
    }
    const newPeople = people.filter(item=> item.id !== Number(id))
    res.status(200).json({success : true, data: newPeople})
}

module.exports = {
    getPeople,
    putPeople,
    updatePeople,
    deletePeople
}