const book1 = {
    pages : 100,
    author : 'abc',
    printInfo : function() {
        console.log(`Pages ${this.pages}, Author ${this.author}`)
    }
} // object literal notations -- seen

// Class -> constructor function
function Book(pages, author) { 
    this.pages = pages // state
    this.author = author

    this.printInfo = function() { // behaviour
        console.log(`Pages ${this.pages}, Author ${this.author}`)
    }
}

// object
const bk1 = new Book(200, 'abc') // object created via constructor function
console.log(`Author ${bk1.author} and Pages ${bk1.pages}`)

const bk2 = new Book(300, 'pqr')
console.log(`Author ${bk2.author} and Pages ${bk2.pages}`)
bk2.printInfo()

console.log(new Date())

