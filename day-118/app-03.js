const buf1 = Buffer.from('abc')
console.log(buf1)

const buf2 = Buffer.from('pqr')
console.log(buf2)

const bytesCopied = buf1.copy(buf2)
console.log(bytesCopied)

console.log(buf1.toString())
console.log(buf2.toString())

const buf4 = Buffer.from([1, 4, 6])
for (const b of buf4) {
    console.log(b)
}