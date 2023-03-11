const authorize =(req, res, next)=>{
    const { user } = req.query
    if(user === "hussain"){
        req.user = { name : 'hussain', id : 7 }
        next()
    }
    else{
        res.status(404).send('Unauthorized')
    }
}

module.exports = authorize