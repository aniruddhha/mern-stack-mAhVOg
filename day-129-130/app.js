const express = require('express')
const jwt = require('jsonwebtoken');

const app = express()

const PORT = 3000

app.use(express.json())

const JWT_SECRET = 'abc_1234_&'

const authJwt = (req, res, next) => {

    const authHeader = req.headers['authorization']

    if(authHeader) {
        // Bearer salfkasklhgksfhfgkshjgf
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if(err) {
                return res.sendStatus(401)
            }
            req.user = user
            next()
        })

    } else {
        res.sendStatus(401)
    }
}

app.post('/login', (req, res) => {

    const { usNm, pass } = req.body

    if(usNm == 'abc' && pass == 'pass123') {
        const token = jwt.sign( { usNm }, JWT_SECRET, { expiresIn: '1h' })
        res.json({ token })
    } else {
        res.sendStatus(401)   
    }
})

app.get('/app/data', authJwt, (req, res) => {

    res.json({
        msg : 'Hey Hi, you are authenticated',
        data : { value : 'Its protected' }
    })
})

app.post('/api/data', authJwt, (req, res) => {
    const receivedData = req.body;
  
    res.json({
      message: 'Data received successfully',
      receivedData: receivedData
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})