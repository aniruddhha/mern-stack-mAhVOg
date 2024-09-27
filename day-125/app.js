const express = require('express')
const app = express()
const port = 3000

app.use( (req, res, next) => {
    console.log('Called App level middleware')
    next()
})

app.get('/simple',(req, res) => {
    console.log('Called GET MEthod')
    res.send('Resource fetched successfully')
})

app.get('/basic', (req, res, next) => {
    console.log('Mount Level Middleware 01')
    next()
}, (req, res, next) => {
    console.log('Mount Level Middleware 02')
    next()
}, (req, res) => {
    console.log('Handling Request here')
   res.send('End of reques')
})

app.listen(port, () => {
    console.log(`Express Server is`)
} )