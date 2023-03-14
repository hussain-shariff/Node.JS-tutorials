let tasks = require('../data')

const getTasks = (req, res)=>{
    res.json(tasks)
}

const createTask = (req, res)=>{
    const { name, id, completed } = req.body
    tasks.push({name, id, completed})
    res.json(tasks)
}

const getSingleTask = (req, res)=>{
    const { id } = req.params
    const checkTask = tasks.find(task=> task.id === Number(id))
    if (checkTask){
        res.json(checkTask)
    }
    else{
        res.status(404).send('Task not found...')
    }
}

const updateTask = (req, res)=>{
    const { id } = req.params
    const { name } = req.body
    const checkTask = tasks.find(task=> task.id === Number(id))
    if (checkTask){
        tasks = tasks.map(task=>{
            if(task.id === Number(id)){
                task.name = name
            }
            return task
        })
        res.json(tasks) 
    }
    else{
        res.status(404).send('Task not found...')
    }
}

const deleteTask = (req, res)=>{
    const { id } = req.params
    const checkTask = tasks.find(task=> task.id === Number(id))
    if (checkTask){
        tasks = tasks.filter(task=> task.id !== Number(id))
        res.json(tasks)
    }
    else{
        res.status(404).send('Task not found...')
    }
}


module.exports = {
    getTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}