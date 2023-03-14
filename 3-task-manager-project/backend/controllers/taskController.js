const Task = require('../models/Tasks')

const getTasks = async (req, res)=>{
    try {
        const Tasks = await Task.find({})
        res.json(Tasks)
    } catch (error) {
        res.status(404).send(error)
    }
    
}

const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body) 
        res.json(task)
    } catch (error) {
        res.status(404).send(error)
    }
}

const getSingleTask = async (req, res)=>{
    const { id } = req.params
    try {
        const singleTask = await Task.findOne({_id : id})
        res.json(singleTask)
    } catch (error) {
        res.status(404).send(error)
    }
}

const updateTask = async (req, res)=>{
    const { id : taskID } = req.params
    try {
        const updatedTask = await Task.findOneAndUpdate({_id : taskID}, req.body, {new : true})
        res.json(updatedTask)
    } catch (error) {
        res.status(404).send(error)
    }
}

const deleteTask = async (req, res)=>{
    const { id : taskID } = req.params
    try {
        const deleteTask = await Task.findOneAndDelete({_id : taskID})
        res.json(deleteTask)
    } catch (error) {
        res.status(404).send(error)
    }
}


module.exports = {
    getTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}