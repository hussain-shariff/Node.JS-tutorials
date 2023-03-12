const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    const { name } = req.body
    if(name){
        res.send(`Welcome ${ req.body.name }`)
    }
    else{
        res.status(404).send('Please provide credentials')
    }
})

module.exports = router