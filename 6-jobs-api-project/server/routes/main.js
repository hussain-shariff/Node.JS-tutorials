const express = require('express')
const router = express.Router()
const {
    test
} = require('../controllers/main')

router.get('/', test)

module.exports = router