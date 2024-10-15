const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/:id', (req, res) => {

    res.json({ msg : 'Getting Single Car'})
})

router.post('/', (req, res) => {

    res.json({ msg : 'Car Saved Successfully'})
})


module.exports = router