const jwt = require('jsonwebtoken')

const authentication = async (req, res, next)=> {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(404).send('Unauthorized')
    }
    else{
        try {
            const token = authHeader.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const { id, username } = decoded
            req.user = { id, username}
            next()
        } catch (error) {
            res.status(404).send('wrong Token')
    }}
}

module.exports = authentication