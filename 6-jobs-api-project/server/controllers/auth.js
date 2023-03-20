const authModel = require('../model/authSchema')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        const user = await authModel.create({...req.body })
        const token = user.createJWT()
        res.json({ user : user.username , token})
    } catch (error) {
        res.status(404).send('Email already exists.')
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await authModel.findOne({email})
    const checkPassword = await user.comparePasswords(password)
    if(!user || !checkPassword){
        res.status(404).send('Invalid Credentials.')
    }
    else{
        const token = user.createJWT()
        res.json({user : user.password, token})
    }
}

module.exports = {
    register,
    login
}