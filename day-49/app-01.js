const rgx1 = /hello/
const res1 = rgx1.exec('hello  world')
console.log(res1)

console.log('hello world'.match(/o/g))

console.log('hello world'.replace(/world/, 'universe'))

console.log('hello world'.search(/o/))