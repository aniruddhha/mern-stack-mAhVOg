const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.post('/create', (req, res) => {
   res.json({ msg: 'Resource created Successfully' })
})

app.get('/', (req, res) => {
    res.json( { msg: 'Here is the list of resources' })
})

app.listen(port, () => {
    console.log(`Express Server is`)
} )