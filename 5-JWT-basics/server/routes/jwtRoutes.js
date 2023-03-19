const express = require('express')
const router = express.Router();
const {
    dashBoardController,
    loginController
} = require('../controllers/jwtController')

router.get('/dashboard', dashBoardController)
router.post('/login', loginController)

module.exports = router