// Car can move in cretain direction with speed. 
// Car can have breaks.
// Car speed up or apply breaks.

// constructor function
function Car() { // class -> before es6
    this.speed = 10

    this.speedUp = function () {
        this.speed += 12
    }

    this.applyBreaks = function() {
        this.speed -= 10
    }

    this.printSpeed = function() {
        console.log(`Speed is ${this.speed}`)
    }
}

// class keyword -> es6
class BrandedCar {

    constructor(speed) {
        this.speed = speed
    }

    speedUp() {
        this.speed += 10
    }

    applyBreaks() {
        this.speed -=10
    }

    printSpeed() {
        console.log(`Speed is ${this.speed}`)
    }
}

const c1 = new Car()
c1.speedUp()
c1.applyBreaks()
c1.printSpeed()

const c2 = new BrandedCar(20)
c2.printSpeed()

const c3 = new BrandedCar(30)
c3.speedUp()
c3.applyBreaks()
c3.printSpeed()