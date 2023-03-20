const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()
const {
    login,
    register
} = require('../controllers/auth')

router.post('/login', login)
router.post('/register', register)

module.exports = router
