const express = require('express')

const app = express()
const PORT = 3000

app.route('/car')
        .get('/:id', (req, res) => {
            res.json({ msg : 'Getting Single Car' })
        })
        .post('/', (req, res) => {
            res.json({msg : 'Car Saved Successfully'})
        })
    .route('/showroom')
        .get('/all', (req, res) => {
            res.json({  showrooms: [1, 2, 3, ,4 ] })
        })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})