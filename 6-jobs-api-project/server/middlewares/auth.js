const jwt = require('jsonwebtoken')

const authentication = (req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(404).send('Unauthorized')
    }
    else{
        try {
            const token = authHeader.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const { username, id } = decoded
            req.user = { username, id }
            next()
        } catch (error) {
            res.status(404).send('Token expired')
        }
    }
}

module.exports = authentication