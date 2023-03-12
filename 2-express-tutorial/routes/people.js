const express = require('express')
const router = express.Router()
const {
    getPeople,
    putPeople,
    updatePeople,
    deletePeople
} = require('../controllers/people')

router.get('/', getPeople)
router.post('/', putPeople)
router.put('/postman/:id', updatePeople)
router.delete('/postman/:id', deletePeople)

module.exports = router
