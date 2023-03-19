const jwt = require('jsonwebtoken')

const dashBoardController = async (req, res)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(404).send('Token not found')
    }
    const randNum = Math.floor(Math.random() * 100)
    res.json({
        suceess : true,
        msg : `Hello John Doe`,
        secret : `Here is your authorized data, your lucky number is ${randNum}`
    })
}

const loginController = async (req, res)=>{
    const { username, password } = req.body
    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn : '30d'})
    res.json({
        suceess : true,
        token
    })
}

module.exports = {
    dashBoardController,
    loginController
}