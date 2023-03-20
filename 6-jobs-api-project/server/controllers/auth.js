const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const {username, password, email} = req.body
    const id = Math.floor(Math.random() * 100)
    const token = jwt.sign({username, id}, process.env.JWT_SECRET, {expiresIn : '30d'})
    res.json({ success : true, token})
}

const login = async (req, res) => {
    const { username, id } = req.user
    res.json({ username, id })
}

module.exports = {
    register,
    login
}