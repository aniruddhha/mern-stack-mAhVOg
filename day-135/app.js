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
    connection.query('select * from employee', (err, res, fld) => {
        if(err) {
            console.log(`❌ Problem in fetching the records`)
            return
        }
        console.log(res)
    
        console.log(res[0]['email'])
    })
})



// connection.end()