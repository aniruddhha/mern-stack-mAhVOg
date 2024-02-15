const car = {  }
console.log(car)

Object.defineProperty(car, 'speed' ,{
    value: 10,
    enumerable: true
})
console.log(car)

for (key in car) {
    console.log(key)
}

const cfg = {}
Object.defineProperties(cfg, {
    db : {
        value : 'pgsql',
        enumerable : true,
        writable: true,
        configurable: true
    },
    nwId: {
        value : 'avc',
        enumerable: false,
    },
    security: {
        value : 'open',
        enumerable: true
    }
})

console.log(cfg)
cfg.db = 'mysql'
console.log(cfg)
delete cfg.db
console.log(cfg)

console.log(Object.getOwnPropertyDescriptor(cfg, 'nwId'))