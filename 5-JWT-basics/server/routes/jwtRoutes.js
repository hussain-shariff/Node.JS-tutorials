const express = require('express')
const router = express.Router();
const {
    testController
} = require('../controllers/jwtController')

router.get('/', testController)

module.exports = router