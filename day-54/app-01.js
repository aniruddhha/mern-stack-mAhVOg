// car will be an entity in our game world.
// car will have speed. break can be applied and speed up can be done.
class Car {

    #speed // access modifiers - private data memeber

    constructor(speed) {
        this.#speed = speed
    }

    setSpeed(speed) {
        this.#speed = speed * 12
    }

    applyBreaks() {
        this.#speed -= 10
    }

    speedUp() {
        this.#speed += 10
    }
}

const c1 = new Car(100) // object -> capsule
c1.applyBreaks()
c1.speedUp()

// c1.speed = 90 // problem
c1.setSpeed(89)

// Bmw is a Car. -> resuability, inheriting the features.
// Bwm can have auto drive mode. -> additional feature
class Bmw extends Car {

    #isOnAutoDrive = false

    constructor(speed, isOnAutoDrive) {
        super(speed)
        this.#isOnAutoDrive = isOnAutoDrive
    }

    turnOnAutoDrive() {
        this.#isOnAutoDrive = true
    }

    turnOffAutoDrive() {
        this.#isOnAutoDrive = false
    }

    setSpeed(speed) { // overriding
        super.setSpeed(speed - 10)
    }
}

const b1 = new Bmw(100, true)

