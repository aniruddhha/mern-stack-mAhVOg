const express = require('express')
const app = express()
const port = 3000

app.post('/create', (req, res) =>{
    res.status(201).send('Resource Created Successfully')
})

app.get('/retrieve',(req, res) => {
    res.send('Resource fetched successfully')
})

app.put('/update', (req, res) => {
    res.send('Resource Updated Successfully')
})

app.delete('/delete', (req, res) => {
    res.send('Resouce Deleted Successfully')
})

app.listen(port, () => {
    console.log(`Express Server is`)
} )