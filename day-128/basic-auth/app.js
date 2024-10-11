const express = require('express')

const app = express()

const PORT = 3000

app.use(express.json())

const USERNAME = 'admin'
const PASSWORD = 'admin124'

const basicAuth = (req, res, next) => {

    const authHdr = req.headers['authorization']
    console.log(authHdr)
    console.log(req.headers)

    if(!authHdr) {
        return res.status(401).json({
            msg : 'User Must Login First'
        })
    }

    const base64Creds = authHdr.split(' ')[1]
    console.log(`Base64 Creds`)
    console.log(base64Creds)
    const creds = Buffer.from(base64Creds, 'base64').toString('ascii')
    console.log(`Normal Creds`)
    console.log(creds)

    const [userName, password] = creds.split(':')
    console.log(userName)
    console.log(password)

    if(userName === USERNAME && password === PASSWORD) {
        next()
    }else {
        return res.status(401).json({
            msg : 'Invalid User'
        })
    }

}

app.get('/api', basicAuth ,(req, res) => {

    const data = {
        msg : 'Hello This is your data',
        tm: new Date()
    }

    res.json(data)
})

app.post('/api', basicAuth, (req, res) => {

    const reqDt = req.body

    res.json({
        msg: 'Received this object',
        reqDt
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})