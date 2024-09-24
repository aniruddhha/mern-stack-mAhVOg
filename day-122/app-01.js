const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.end('This is simple GET method')
    } else {
        res.statusCode = 400
        res.setHeader('Content-Type','text/plain')
        res.end('Resource Not Found')
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is Running ${port}`)
})

