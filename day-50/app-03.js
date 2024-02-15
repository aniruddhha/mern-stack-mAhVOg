const clg = {
    name : 'abc'
}
console.log(clg)
clg.typ = 'pvt'

console.log(clg)
Object.preventExtensions(clg)
clg.branches = 3
console.log(clg)