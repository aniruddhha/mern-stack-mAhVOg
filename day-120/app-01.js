const EventEmitter = require('events')

const em = new EventEmitter()

em.on('hi', (nm) => {
    console.log(`Data is ${nm}`)
})

em.on('error', e => {
    console.log(e)
} )

em.emit('hi','Apple')
em.emit('hi','Android')
em.emit('hi','Windows')
em.emit('error', new Error('Bad Data'))
