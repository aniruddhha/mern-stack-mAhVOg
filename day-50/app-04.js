const book = {
    pages : 200,
    author: 'abc'
}

// Object.seal(book)
Object.freeze(book)

book.url = 'abc.com'
delete book.author

book.pages = 90
console.log(book)