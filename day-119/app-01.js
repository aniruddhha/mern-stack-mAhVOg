const fs = require('fs')

const rs = fs.createReadStream('abc.txt')

rs.on('data', buffer => {
    console.log('Received Chunk', buffer)
})

rs.on('end', () => {
    console.log(`Readig Completed`)
})

const ws = fs.createWriteStream('op.txt')
ws.write('hey hi \n')
ws.write('its good \n')
ws.end('this is end of stream')

ws.on('finish', () => {
    console.log(`All Data have been written`)
})