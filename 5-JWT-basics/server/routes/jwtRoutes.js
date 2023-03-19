const express = require('express')
const router = express.Router();
const auth = require('../middlewares/auth')
const {
    dashBoardController,
    loginController
} = require('../controllers/jwtController')

router.get('/dashboard',auth, dashBoardController)
router.post('/login', loginController)

module.exports = router