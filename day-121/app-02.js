const fs = require('node:fs');

const filePath = './ex2.txt'

const content = 'Hello, This is generated file from node'

fs.writeFileSync(filePath, content)
console.log(`File Written Successfully`)

const fileData = fs.readFileSync(filePath, 'utf-8')
console.log(fileData)