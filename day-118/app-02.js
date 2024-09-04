const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.allocUnsafe(10)
console.log(buf2)

const buf3 = Buffer.from([1, 3, 4])
console.log(buf3)

const buf4 = Buffer.from('Hello World')
console.log(buf4)

