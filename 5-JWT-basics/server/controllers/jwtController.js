const dashBoardController = async (req, res)=>{
    const randNum = Math.floor(Math.random() * 100)
    res.json({
        suceess : true,
        msg : randNum
    })
}

const loginController = async (req, res)=>{
    const { username, password } = req.body
    res.json({
        suceess : true,
        msg : [username, password]
    })
}

module.exports = {
    dashBoardController,
    loginController
}