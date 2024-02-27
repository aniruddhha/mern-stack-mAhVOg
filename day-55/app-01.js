class Shape { // incomplete

    calculateArea() { // incomplete

    }
}

class Circle extends Shape { 

    #radius

    constructor(radius) {
        super()
        this.#radius = radius
    }

    calculateArea() {
        return 3.14 * (this.#radius * this.#radius)
    }
}

class Rectangle extends Shape {

    #width
    #length

    constructor(w, l) {
        super()
        this.#width = w
        this.#length = l
    }

    calculateArea() {
        return this.#width * this.#length
    }
}

const rect = new Rectangle()
rect.calculateArea()

const circ = new Circle()
circ.calculateArea()

function shaper(sh) {
    if(!(sh instanceof Shape)) {
        console.log(`Error`)
        return
    }

    sh.calculateArea()
}

shaper(rect)
shaper(circ)
shaper(new Date())