const express = require('express')

const app = express()
const PORT = 3000

const carRouter = require('./car')
const showroomRouter = require('./showroom')

const auth = (req, res, next) => next()

app.use('/car',  auth(), carRouter)
app.use('/showroom', auth(), showroomRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})