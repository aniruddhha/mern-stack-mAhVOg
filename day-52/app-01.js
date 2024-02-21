function sayHi(msg) {
    console.log(`Hey ${this.nm}, ${msg}` )
}

sayHi('hello')

const obj = { 
    nm : 'abc'
}

sayHi.call(obj, 'hello')

function Car(name) {
    this.name = name
}

function Bmw(name, speed) {
    Car.call(this, name)
    this.speed = speed
}

const bmw = new Bmw('bmw',90)
console.log(bmw)
