const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/all', (req, res) => {

    res.json({ msg : 'Getting Single Car', data: [1, 2, 3]})
})


module.exports = router