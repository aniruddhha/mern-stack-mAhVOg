const fs = require('node:fs/promises');

const filePath = './ex1.txt'

async function writeFile() {
    const content = 'Hello, This is generated file from node'

    try {
        await fs.writeFile(filePath, content)
        console.log(`Successfully Written`)
    } catch(err) {
        console.log('Error while writing', err)
    }
  
}

async function readFile() {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8')
    console.log(fileData)
    } catch (error) {
        console.log('Error while reading', error)
    }
}

writeFile().then(() => {
    readFile().catch(err => console.log(err))
}).catch(e => console.log(e))