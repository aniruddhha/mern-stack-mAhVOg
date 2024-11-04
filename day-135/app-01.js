const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'aniruddha',
    database:'company'
})

connection.connect(err => {
    if(err) {
        console.log(`❌ Problem in connecting`)
        return
    }
})

const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.post('/create', (req, res) => {

    console.log(req.body)
    const {firstName, lastName, email, gender, doj, department, salary} = req.body

    connection.query('insert into employee (first_name, last_name, email, gender, doj, department, salary) values (?, ?, ? ,? ,?, ?, ?)', [firstName, lastName, email, gender, doj, department, salary], (err, rs, fld) => {

        if(err) {
            console.log(err)
            return res.status(400).json({ msg:'Bad Data' })
        }
        res.status(201).send('Resource Created Successfully')
    })
})


app.get('/retrieve',(req, res) => {

    connection.query('select * from employee', (err, rs, fld) => {
        if(err) {
            console.log(err)
            return res.status(400).json({ msg:'Problem in fetching data' })
        }
        res.status(200).json(rs)
    })
})


app.listen(port, () => {
    console.log(`Express Server is`)
} )